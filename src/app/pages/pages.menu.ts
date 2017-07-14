export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'obras',
        data: {
          menu: {
            title: 'general.menu.obras',
            icon: 'ion-social-buffer',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'presupuesto',
        data: {
          menu: {
            title: 'general.menu.presupuesto',
            icon: 'ion-cash',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'gastos',
        data: {
          menu: {
            title: 'general.menu.gastos',
            icon: 'ion-social-usd-outline',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'costos',
        data: {
          menu: {
            title: 'general.menu.costos',
            icon: 'ion-social-usd',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'categorias',
        data: {
          menu: {
            title: 'general.menu.categorias',
            icon: 'ion-android-list',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'materiales',
        data: {
          menu: {
            title: 'general.menu.materiales',
            icon: 'ion-cube',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'reportes',
        data: {
          menu: {
            title: 'general.menu.reportes',
            icon: 'ion-ios-list-outline',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'usuarios',
        data: {
          menu: {
            title: 'general.menu.usuarios',
            icon: 'ion-person-stalker',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'grupos',
        data: {
          menu: {
            title: 'general.menu.grupos',
            icon: 'ion-ios-people',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },

      {
        path: 'permisos',
        data: {
          menu: {
            title: 'general.menu.permisos',
            icon: 'ion-ribbon-b',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'bitacora',
        data: {
          menu: {
            title: 'general.menu.bitacora',
            icon: 'ion-ios-list',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'general.menu.form_elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'general.menu.form_inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'general.menu.form_layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'general.menu.tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'general.menu.basic_tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'general.menu.smart_tables',
              }
            }
          },
          {
            path: 'datatables',
            data: {
              menu: {
                title: 'Data Tables',
              }
            }
          },
           {
             path: 'hottables',
             data: {
               menu: {
                 title: 'Hot Tables',
               }
             }
           }
        ]
      },
    ]
  }
];
