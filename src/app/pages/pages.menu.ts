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
        path: 'admin',
        data: {
          menu: {
            title: 'general.menu.admin',
            icon: 'ion-person-stalker',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'users',
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
                order: 1
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
                order: 2
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
                order: 3
              }
            }
          }
        ]
      }
    ]
  }
];
