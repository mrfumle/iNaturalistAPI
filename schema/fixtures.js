{
  "elasticsearch": {
    "places": {
      "place": [
        {
          "id": 1,
          "name": "United States",
          "display_name_autocomplete": "United States",
          "location": "48.8907012939,-116.9820022583",
          "admin_level": 0,
          "bbox_area": 5500,
          "geometry_geojson": {
            "type": "Polygon",
            "coordinates": [[
              [ -125, 50 ], [ -65, 50 ], [ -65, 25 ], [ -125, 25 ], [ -125, 50 ]
            ]]
          },
          "bounding_box_geojson": {
            "type": "Polygon",
            "coordinates": [[
              [ -125, 50 ], [ -65, 50 ], [ -65, 25 ], [ -125, 25 ], [ -125, 50 ]
            ]]
          }
        },
        {
          "id": 2,
          "name": "Massachusetts",
          "display_name_autocomplete": "Massachusetts",
          "location": "42.0368995667,-71.6835021973",
          "admin_level": 1,
          "bbox_area": 6,
          "geometry_geojson": {
            "type": "Polygon",
            "coordinates": [[
              [ -73.5, 42.75 ], [ -70, 42.75 ], [ -70, 41.5 ], [ -73.5, 41.5 ], [ -73.5, 42.75 ]
            ]]
          },
          "bounding_box_geojson": {
            "type": "Polygon",
            "coordinates": [[
              [ -73.5, 42.75 ], [ -70, 42.75 ], [ -70, 41.5 ], [ -73.5, 42.75 ]
            ]]
          }
        },
        {
          "id": 3,
          "name": "Community",
          "display_name_autocomplete": "Community",
          "admin_level": null,
          "bbox_area": 6,
          "geometry_geojson": {
            "type": "Polygon",
            "coordinates": [[
              [ -73.5, 42.75 ], [ -70, 42.75 ], [ -70, 41.5 ], [ -73.5, 41.5 ], [ -73.5, 42.75 ]
            ]]
          },
          "bounding_box_geojson": {
            "type": "Polygon",
            "coordinates": [[
              [ -73.5, 42.75 ], [ -70, 42.75 ], [ -70, 41.5 ], [ -73.5, 41.5 ], [ -73.5, 42.75 ]
            ]]
          }
        },
        {
          "id": 123,
          "name": "itsname"
        },
        {
          "id": 432,
          "name": "a-place",
          "display_name_autocomplete": "a-place"
        }
      ]
    },
    "identifications": {
      "identification": [
        {
          "id": 102,
          "user": {
            "id": 123
           },
          "body": "id1",
          "category": "leading",
          "current": true,
          "current_taxon": true,
          "taxon": {
            "id": 5,
            "is_active": true,
            "iconic_taxon_id": 1,
            "ancestor_ids": [1,2,3,4,5],
            "min_species_ancestry": "1,2,3,4,5",
            "rank_level": 10,
             "min_species_ancestors": [
              { "id": 1 }, { "id": 2 }, { "id": 3 }, { "id": 4 }, { "id": 5 }
            ]
         },
          "observation": {
            "id": 1,
            "user": {
              "id": 123
            },
            "taxon": {
              "id": 5,
              "iconic_taxon_id": 1,
              "ancestor_ids": [1,2,3,4,5],
              "min_species_ancestry": "1,2,3,4,5",
              "rank_level": 10
            }
          }
        },
        {
          "id": 103,
          "user": {
            "id": 5
           },
          "body": "id2",
          "category": "maverick",
          "current": true,
          "current_taxon": false,
          "taxon": {
            "id": 5,
            "iconic_taxon_id": 101,
            "ancestor_ids": [1,2,3,4,5],
            "min_species_ancestry": "1,2,3,4,5",
            "rank_level": 10,
            "rank": "species",
            "is_active": true,
            "min_species_ancestors": [
              { "id": 1 }, { "id": 2 }, { "id": 3 }, { "id": 4 }, { "id": 5 }
            ]
          },
          "observation": {
            "id": 1,
            "user": {
              "id": 5
            },
            "taxon": {
              "id": 6,
              "iconic_taxon_id": 101,
              "ancestor_ids": [1,2,3,4,6],
              "min_species_ancestry": "1,2,3,4,6",
              "rank_level": 10,
              "rank": "species",
              "is_active": true
            }
          }
        }
      ]
    },
    "observation_fields": {
      "observation_field": [
        {
          "id": 1,
          "name": "fieldname",
          "name_autocomplete": "fieldnameautocomplete"
        }
      ]
    },
    "observations": {
      "observation": [
        {
          "id": 1,
          "user": { "id": 123 },
          "created_at": "2015-12-31T00:00:00",
          "private_location": "1,2",
          "taxon": {
            "id": 5,
            "iconic_taxon_id": 1,
            "ancestor_ids": [1,2,3,4,5],
            "min_species_ancestry": "1,2,3,4,5",
            "rank_level": 10
          },
          "project_ids": [ 543 ],
          "private_geojson": { "type": "Point", "coordinates": [ "2", "1" ] }
        },
        {
          "id": 2,
          "user": { "id": 5 },
          "created_at": "2016-01-01T01:00:00",
          "location": "2,3",
          "taxon": {
            "id": 4,
            "ancestor_ids": [1,2,3,4],
            "min_species_ancestry": "1,2,3,4"
          },
          "non_owner_ids":[{ "user": { "id": 123 } }],
          "place_guess": "Montana",
          "private_geojson": { "type": "Point", "coordinates": [ "3", "2" ] }
        },
        {
          "id": 333,
          "user": { "id": 333 },
          "created_at": "2010-01-01T02:00:00",
          "private_location": "1,2",
          "geoprivacy": "obscured",
          "place_guess": "Idaho"
        },
        {
          "id": 4,
          "user": { "id": 333 },
          "created_at": "1500-01-01T05:00:00",
          "observed_on": "1500-01-01T05:00:00",
          "taxon": {
            "id": 123,
            "iconic_taxon_id": 1,
            "ancestor_ids": [11,22,33,123],
            "min_species_ancestry": "11,22,33,123",
            "rank_level": 10
          },
          "sounds": {
            "id": 1,
            "license_code": "CC-BY",
            "attribution": "Slartibartfast",
            "native_sound_id": 123
          }
        },
        {
          "id": 5,
          "user": { "id": 333 },
          "taxon": {
            "id": 123,
            "iconic_taxon_id": 1,
            "ancestor_ids": [11,22,33,123],
            "min_species_ancestry": "11,22,33,123",
            "rank_level": 10
          },
          "location": "50,50",
          "private_location": "3,4",
          "private_geojson": { "type": "Point", "coordinates": [ "4", "3" ] },
          "place_guess": "Tangerina",
          "captive": true
        },
        {
          "id": 6,
          "user": { "id": 333 },
          "geoprivacy": "private",
          "private_location": "1.234,1.234",
          "private_geojson": { "type": "Point", "coordinates": [ "1.234", "1.234" ] }
        }
      ]
    },
    "projects": {
      "project": [
        {
          "id": 1,
          "title": "Project One",
          "title_autocomplete": "Project One",
          "title_exact": "Project One",
          "location": "11,12",
          "user_ids": [ 1, 5, 123 ]
        },
        {
          "id": 2,
          "title": "Project Two",
          "title_autocomplete": "Project Two",
          "title_exact": "Project Two",
          "location": "21,22",
          "user_ids": [ 123 ]
        }
      ]
    },
    "taxa": {
      "taxon": [
        {
          "id": 1001,
          "ancestor_ids": [ 1001 ],
          "name": "Life",
          "names": [{ "name_autocomplete": "Life", "exact": "Life" }],
          "observations_count": 50,
          "is_active": true
        },
        {
          "id": 1,
          "name": "Los",
          "ancestor_ids": [ 1001, 1 ],
          "names": [{ "name_autocomplete": "Los", "exact": "Los" }],
          "observations_count": 50,
          "is_active": true,
          "statuses": [ { "place_id": 432, "iucn": 30, "authority": "IUCN Red List", "status": "VU" } ],
          "listed_taxa": [ { "place_id": 432, "establishment_means": "endemic" } ]
        },
        {
          "id": 2,
          "name": "Los",
          "parent_id": 1,
          "ancestor_ids": [ 1001, 1, 2 ],
          "names": [{ "name_autocomplete": "Los", "exact": "Los" }],
          "observations_count": 50,
          "is_active": false
        },
        {
          "id": 3,
          "name": "Los lobos",
          "parent_id": 2,
          "ancestor_ids": [ 1001, 1, 2, 3 ],
          "names": [{ "name_autocomplete": "Los lobos", "exact": "Los lobos" }],
          "observations_count": 100,
          "is_active": true,
          "taxon_changes_count": 1,
          "taxon_schemes_count": 1
        },
        {
          "id": 4,
          "names": [{ "name_autocomplete": "眼紋疏廣蠟蟬", "exact": "眼紋疏廣蠟蟬" }],
          "observations_count": 200,
          "is_active": true
        },
        {
          "id": 5,
          "iconic_taxon_id": 101,
          "is_active": true
        },
        {
          "id": 6,
          "iconic_taxon_id": 101,
          "is_active": true
        },
        {
          "id": 123,
          "name": "itsname",
          "names": [
            { "name": "BestEnglish", "locale": "en" },
            { "name": "BestInAmerica", "locale": "en", "place_taxon_names": [
              { "place_id": 111 }
            ] },
            { "name": "BestInCalifornia", "locale": "en", "place_taxon_names": [
              { "place_id": 222 } ] } ],
          "statuses": [
            { "place_id": null, "iucn": 20 },
            { "place_id": 111, "iucn": 30 },
            { "place_id": 222, "iucn": 50 } ],
          "listed_taxa": [
            { "place_id": 111, "establishment_means": "endemic" },
            { "place_id": 444 },
            { "place_id": 222, "establishment_means": "introduced" }
          ]
        },
        {
          "id": 999,
          "name": "ataxon"
        },
        {
          "id": 9898,
          "name": "ataxon"
        },
        {
          "id": 10001,
          "name": "DetailsTaxon"
        }
      ]
    },
    "users": {
      "user": [
        {
          "id": 1,
          "login": "userlogin",
          "login_autocomplete": "userloginautocomplete",
          "name": "username",
          "name_autocomplete": "usernameautocomplete"
        },
        {
          "id": 5,
          "login": "b-user",
          "name": "B User"
        },
        {
          "id": 123,
          "login": "a-user",
          "name": "A User"
        }
      ]
    },
    "update_actions": {
      "update_action": [
        {
          "id": 1,
          "subscriber_ids": [123],
          "resource_id": 1,
          "resource_type": "Observation",
          "notifier_type": "Comment",
          "notifier_id": 1,
          "notification": "activity",
          "resource_owner_id": 123,
          "viewed_subscriber_ids": []
        },
        {
          "id": 2,
          "subscriber_ids": [123],
          "resource_id": 2,
          "resource_type": "Observation",
          "notifier_type": "Comment",
          "notifier_id": 2,
          "notification": "activity",
          "resource_owner_id": 5,
          "viewed_subscriber_ids": []
        }
      ]
    }
  },
  "postgresql": {
    "comments": [
      {
        "id": 1,
        "parent_type": "Observation",
        "parent_id": 1,
        "body": "I am the very model of a modern major general"
      },
      {
        "id": 2,
        "parent_type": "Observation",
        "parent_id": 2,
        "body": "I've information animal, mineral, and vegetable'"
      }
    ],
    "conservation_statuses": [
      {
        "taxon_id": 10001,
        "place_id": 432,
        "authority": "cs-authority",
        "status": "cs-status",
        "iucn": 20,
        "description": "cs-description",
        "created_at": "2016-01-01 00:00:00",
        "updated_at": "2016-01-01 00:00:00"
      }
    ],
    "deleted_observations": [
      {
        "user_id": 1,
        "observation_id": 1000,
        "created_at": "2016-01-01 00:00:00",
        "updated_at": "2016-01-01 00:00:00"
      },
      {
        "user_id": 1,
        "observation_id": 1001,
        "created_at": "2016-02-01 00:00:00",
        "updated_at": "2016-01-01 00:00:00"
      },
      {
        "user_id": 1,
        "observation_id": 1002,
        "created_at": "2016-03-01 00:00:00",
        "updated_at": "2016-01-01 00:00:00"
      }
    ],
    "identifications": [
      {
        "id": 102,
        "observation_id": 1,
        "taxon_id": 5,
        "user_id": 123,
        "body": "id1"
      },
      {
        "id": 103,
        "observation_id": 1,
        "taxon_id": 5,
        "user_id": 5,
        "body": "id2"
      }
    ],
    "lists": [
      {
        "id": 301,
        "title": "A List"
      },
      {
        "id": 999,
        "title": "AProjectList",
        "project_id": 543,
        "type": "ProjectList"
      },
      {
        "id": 1000,
        "title": "DetailsListedTaxonList"
      }
    ],
    "listed_taxa": [
      {
        "taxon_id": 401,
        "list_id": 301
      },
      {
        "taxon_id": 402,
        "list_id": 301
      },
      {
        "taxon_id": 987,
        "list_id": 999
      },
      {
        "taxon_id": 876,
        "list_id": 999
      },
      {
        "taxon_id": 10001,
        "list_id": 1000,
        "place_id": 432,
        "establishment_means": "endemic"
      }
    ],
    "places": [
      {
        "id": 432,
        "name": "a-place",
        "display_name": "a-place"
      }
    ],
    "project_users": [
      {
        "project_id": 543,
        "user_id": 5,
        "observations_count": 1000
      },
      {
        "project_id": 543,
        "user_id": 6,
        "observations_count": 800
      },
      {
        "project_id": 543,
        "user_id": 123,
        "role": "curator",
        "observations_count": 900
      }
    ],
    "projects": [
      {
        "id": 543,
        "slug": "a-project",
        "title": "A Project",
        "user_id": 6,
        "start_time": "2016-02-02 2:22:22",
        "end_time": "2016-05-05 5:55:55"
      }
    ],
    "rules": [
      {
        "type": "ProjectObservationRule", "ruler_type": "Project", "ruler_id": 543,
        "operand_type": "Place",
        "operand_id": 222,
        "operator": "observed_in_place?"
      },
      {
        "type": "ProjectObservationRule", "ruler_type": "Project", "ruler_id": 543,
        "operand_type": "Place",
        "operand_id": 333,
        "operator": "observed_in_place?"
      },
      {
        "type": "ProjectObservationRule", "ruler_type": "Project", "ruler_id": 543,
        "operand_type": "Taxon",
        "operand_id": 444,
        "operator": "in_taxon?"
      },
      {
        "type": "ProjectObservationRule", "ruler_type": "Project", "ruler_id": 543,
        "operand_type": "Taxon",
        "operand_id": 555,
        "operator": "in_taxon?"
      },
      {
        "type": "ProjectObservationRule", "ruler_type": "Project", "ruler_id": 543,
        "operator": "on_list?", "operand_id": 1
      },
      {
        "type": "ProjectObservationRule", "ruler_type": "Project", "ruler_id": 543,
        "operator": "identified?", "operand_id": 1
      },
      {
        "type": "ProjectObservationRule", "ruler_type": "Project", "ruler_id": 543,
        "operator": "georeferenced?", "operand_id": 1
      },
      {
        "type": "ProjectObservationRule", "ruler_type": "Project", "ruler_id": 543,
        "operator": "has_a_photo?", "operand_id": 1
      },
      {
        "type": "ProjectObservationRule", "ruler_type": "Project", "ruler_id": 543,
        "operator": "has_a_sound?", "operand_id": 1
      },
      {
        "type": "ProjectObservationRule", "ruler_type": "Project", "ruler_id": 543,
        "operator": "captive?", "operand_id": 1
      },
      {
        "type": "ProjectObservationRule", "ruler_type": "Project", "ruler_id": 543,
        "operator": "identified?", "operand_id": 1
      },
      {
        "type": "ProjectObservationRule", "ruler_type": "Project", "ruler_id": 543,
        "operator": "wild?", "operand_id": 1
      },
      {
        "type": "ProjectObservationRule", "ruler_type": "Project", "ruler_id": 543,
        "operator": "verifiable?", "operand_id": 1
      }
    ],
    "users": [
      {
        "id": 1,
        "login": "userlogin",
        "name": "username"
      },
      {
        "id": 5,
        "login": "b-user",
        "name": "B User"
      },
      {
        "id": 6,
        "login": "z-user",
        "name": "Z User",
        "icon_content_type": "image/jpeg",
        "icon_file_name": "img.jpg"
      },
      {
        "id": 123,
        "login": "a-user",
        "name": "A User",
        "icon_content_type": "image/jpeg",
        "icon_file_name": "img.jpg"
      }
    ],
    "taxa": [
      {
        "id": 101,
        "name": "Actinopterygii"
      },
      {
        "id": 102,
        "name": "Amphibia"
      },
      {
        "id": 103,
        "name": "Animalia"
      },
      {
        "id": 104,
        "name": "Arachnida"
      },
      {
        "id": 105,
        "name": "Aves"
      },
      {
        "id": 106,
        "name": "Chromista"
      },
      {
        "id": 107,
        "name": "Insecta"
      },
      {
        "id": 108,
        "name": "Fungi"
      },
      {
        "id": 109,
        "name": "Mammalia"
      },
      {
        "id": 110,
        "name": "Mollusca"
      },
      {
        "id": 111,
        "name": "Plantae"
      },
      {
        "id": 112,
        "name": "Protozoa"
      },
      {
        "id": 113,
        "name": "Reptilia"
      }
    ]
  }
}
