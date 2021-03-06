"use strict";
var _ = require( "underscore" ),
    squel = require( "squel" ),
    esClient = require( "../es_client" ),
    pgClient = require( "../pg_client" ),
    Model = require( "./model" );

var User = class User extends Model {

  constructor( attrs ) {
    super( attrs );
    this.icon_url = User.iconUrl( this );
  }

  static findByLogin( login, callback ) {
    if( _.isEmpty( login ) ) { return callback( ); }
    var query = squel.select( ).field( "id, login, name ").from( "users" ).
      where( "login = ?", login );
    pgClient.connection.query( query.toString( ),
      function( err, result ) {
        if( err ) { return callback( err ); }
        callback( null, result.rows[0] );
      }
    );
  }

  static findByLoginOrID( login, callback ) {
    User.findByLogin( login, function( err, user ) {
      if( err ) { return callback( err ); }
      if( user ) { return callback( null, user ); }
      var query = squel.select( ).field( "id, login, name ").from( "users" ).
        where( "id = ?", login );
      pgClient.connection.query( query.toString( ),
        function( err, result ) {
          if( err ) { return callback( err ); }
          var user = result.rows[0] ? result.rows[0] : false;
          callback( null, user );
        }
      );
    });
  }

  static findInES( idOrLogin, callback ) {
    User.findByLoginOrID( idOrLogin, function( err, user ) {
      if( err ) { return callback( err ); }
      if( !user ) { return callback( ); }
      const query = { body: { query: { term: { id: user.id } } } };
      esClient.search( "users", query, ( err, results ) => {
        if( err ) { return callback( err ); }
        var user = results.hits.hits[0] ? results.hits.hits[0]._source : null;
        callback( null, user );
      });
    });
  }

  static iconUrl( user ) {
    if( user.icon ) {
      return user.icon.replace("thumb", "medium");
    }
    if( !user.icon_content_type ) { return; }
    var extension;
    if( user.icon_content_type && user.icon_content_type.match( /jpeg$/ ) ) { extension = "jpg"; }
    else if( user.icon_content_type && user.icon_content_type.match( /png$/ ) ) { extension = "png"; }
    else if( user.icon_content_type && user.icon_content_type.match( /gif$/ ) ) { extension = "gif"; }
    else if( user.icon_content_type && user.icon_content_type.match( /bmp$/ ) ) { extension = "bmp"; }
    else if( user.icon_content_type && user.icon_content_type.match( /tiff$/ ) ) { extension = "tiff"; }
    else return;
    // catch a few file_names that paperclip knows are JPEGs
    if( extension == "jpg" && user.icon_file_name &&
        user.icon_file_name.match( /(stringio\.txt|open-uri|\.jpeg|^data$)/ ) ) {
      extension = "jpeg";
    }
    var prefix = global.config.userImagePrefix ||
      "https://static.inaturalist.org/attachments/users/icons/";
    return prefix + user.id + "/medium." + extension;
  }

};

User.modelName = "user";
User.tableName = "users";
User.returnFields = [
  "id", "login", "name" ];

module.exports = User;
