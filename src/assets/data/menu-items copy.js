export const MENU_ITEMS = [{
  key: 'general',
  label: 'GENERAL',
  isTitle: true
}, {
  key: 'dashboards',
  icon: 'iconamoon:home-duotone',
  label: 'Dashboards',
  children: [{
    key: 'dashboard-analytics',
    label: 'Analytics',
    url: '/dashboard/analytics',
    parentKey: 'dashboards'
  }, {
    key: 'dashboard-finance',
    label: 'Finance',
    url: '/dashboard/finance',
    parentKey: 'dashboards'
  }, {
    key: 'dashboard-sales',
    label: 'Sales',
    url: '/dashboard/sales',
    parentKey: 'dashboards'
  }]
}, {
  key: 'apps',
  label: 'APPS',
  isTitle: true
}, {
  key: 'ecommerce',
  icon: 'iconamoon:shopping-bag-duotone',
  label: 'Ecommerce',
  children: [{
    key: 'ecommerce-products',
    label: 'Products',
    url: '/ecommerce/products',
    parentKey: 'ecommerce'
  }, {
    key: 'ecommerce-products-details',
    label: 'Product Details',
    url: '/ecommerce/products/10005',
    parentKey: 'ecommerce'
  }, {
    key: 'ecommerce-create-product',
    label: 'Create Product',
    url: '/ecommerce/products/create',
    parentKey: 'ecommerce'
  }, {
    key: 'ecommerce-customers',
    label: 'Customers',
    url: '/ecommerce/customers',
    parentKey: 'ecommerce'
  }, {
    key: 'ecommerce-sellers',
    label: 'Sellers',
    url: '/ecommerce/sellers',
    parentKey: 'ecommerce'
  }, {
    key: 'ecommerce-orders',
    label: 'Orders',
    url: '/ecommerce/orders',
    parentKey: 'ecommerce'
  }, {
    key: 'ecommerce-order-details',
    label: 'Order Details',
    url: '/ecommerce/orders/3001',
    parentKey: 'ecommerce'
  }, {
    key: 'ecommerce-inventory',
    label: 'Inventory',
    url: '/ecommerce/inventory',
    parentKey: 'ecommerce'
  }]
}, {
  key: 'apps-chat',
  icon: 'iconamoon:comment-dots-duotone',
  label: 'Chat',
  url: '/apps/chat'
}, {
  key: 'apps-email',
  icon: 'iconamoon:email-duotone',
  label: 'Email',
  url: '/apps/email'
}, {
  key: 'apps-calendar',
  icon: 'iconamoon:calendar-1-duotone',
  label: 'Calendar',
  children: [{
    key: 'calendar-schedule',
    label: 'Schedule',
    url: '/calendar/schedule',
    parentKey: 'apps-calendar'
  }, {
    key: 'calendar-integration',
    label: 'Integration',
    url: '/calendar/integration',
    parentKey: 'apps-calendar'
  }, {
    key: 'calendar-help',
    label: 'Help',
    url: '/calendar/help',
    parentKey: 'apps-calendar'
  }]
}, {
  key: 'apps-todo',
  icon: 'iconamoon:ticket-duotone',
  label: 'Todo',
  url: '/apps/todo'
}, {
  key: 'apps-social',
  icon: 'iconamoon:squinting-face-duotone',
  label: 'Social',
  url: '/apps/social'
}, {
  key: 'apps-contacts',
  icon: 'iconamoon:profile-circle-duotone',
  label: 'Contacts',
  url: '/apps/contacts'
}, {
  key: 'apps-invoices',
  icon: 'iconamoon:invoice-duotone',
  label: 'Invoices',
  children: [{
    key: 'invoices',
    label: 'Invoices List',
    url: '/invoices',
    parentKey: 'apps-invoices'
  }, {
    key: 'invoices-details',
    label: 'Invoices Details',
    url: '/invoices/RB6985',
    parentKey: 'apps-invoices'
  }]
}, {
  key: 'custom',
  label: 'Custom',
  isTitle: true
}, {
  key: 'pages',
  label: 'Pages',
  isTitle: false,
  icon: 'iconamoon:copy-duotone',
  children: [{
    key: 'page-welcome',
    label: 'Welcome',
    url: '/pages/welcome',
    parentKey: 'pages'
  }, {
    key: 'page-faqs',
    label: 'FAQs',
    url: '/pages/faqs',
    parentKey: 'pages'
  }, {
    key: 'page-profile',
    label: 'Profile',
    url: '/pages/profile',
    parentKey: 'pages'
  }, {
    key: 'page-coming-soon',
    label: 'Coming Soon',
    url: '/coming-soon',
    parentKey: 'pages',
    target: '_blank'
  }, {
    key: 'page-contact-us',
    label: 'Contact Us',
    url: '/pages/contact-us',
    parentKey: 'pages'
  }, {
    key: 'page-about-us',
    label: 'About Us',
    url: '/pages/about-us',
    parentKey: 'pages'
  }, {
    key: 'page-our-team',
    label: 'Our Team',
    url: '/pages/our-team',
    parentKey: 'pages'
  }, {
    key: 'page-timeline',
    label: 'Timeline',
    url: '/pages/timeline',
    parentKey: 'pages'
  }, {
    key: 'page-pricing',
    label: 'Pricing',
    url: '/pages/pricing',
    parentKey: 'pages'
  }, {
    key: 'page-maintenance',
    label: 'Maintenance',
    url: '/maintenance',
    parentKey: 'pages',
    target: '_blank'
  }, {
    key: 'page-404-error',
    label: '404 Error',
    url: '/error-404',
    parentKey: 'pages',
    target: '_blank'
  }, {
    key: 'page-404-error2',
    label: '404 Error 2',
    url: '/error-404-2',
    parentKey: 'pages',
    target: '_blank'
  }, {
    key: 'page-error-404-alt',
    label: 'Error 404 Alt',
    url: '/pages/error-404-alt',
    parentKey: 'pages'
  }]
}, {
  key: 'page-authentication',
  label: 'Authentication',
  isTitle: false,
  icon: 'iconamoon:lock-duotone',
  children: [{
    key: 'sign-in',
    label: 'Sign In',
    url: '/auth/sign-in',
    parentKey: 'page-authentication'
  }, {
    key: 'sign-in-2',
    label: 'Sign In 2',
    url: '/auth/sign-in-2',
    parentKey: 'page-authentication'
  }, {
    key: 'signup',
    label: 'Sign Up',
    url: '/auth/sign-up',
    parentKey: 'page-authentication'
  }, {
    key: 'signup2',
    label: 'Sign Up 2',
    url: '/auth/sign-up-2',
    parentKey: 'page-authentication'
  }, {
    key: 'reset-pass',
    label: 'Reset Password',
    url: '/auth/reset-pass',
    parentKey: 'page-authentication'
  }, {
    key: 'reset-pass2',
    label: 'Reset Password 2',
    url: '/auth/reset-pass-2',
    parentKey: 'page-authentication'
  }, {
    key: 'lock-screen',
    label: 'Lock Screen',
    url: '/auth/lock-screen',
    parentKey: 'page-authentication'
  }, {
    key: 'lock-screen-2',
    label: 'Lock Screen 2',
    url: '/auth/lock-screen-2',
    parentKey: 'page-authentication'
  }]
}, {
  key: 'widgets',
  icon: 'iconamoon:gift-duotone',
  label: 'Widgets',
  url: '/widgets'
}, {
  key: 'components',
  label: 'COMPONENTS',
  isTitle: true
}, {
  key: 'base-ui',
  icon: 'iconamoon:briefcase-duotone',
  label: 'Base UI',
  children: [{
    key: 'base-ui-accordions',
    label: 'Accordions',
    url: '/ui/accordions',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-alerts',
    label: 'Alerts',
    url: '/ui/alerts',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-avatars',
    label: 'Avatars',
    url: '/ui/avatars',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-badges',
    label: 'Badges',
    url: '/ui/badges',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-breadcrumb',
    label: 'Breadcrumb',
    url: '/ui/breadcrumb',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-buttons',
    label: 'Buttons',
    url: '/ui/buttons',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-cards',
    label: 'Cards',
    url: '/ui/cards',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-carousel',
    label: 'Carousel',
    url: '/ui/carousel',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-collapse',
    label: 'Collapse',
    url: '/ui/collapse',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-dropdowns',
    label: 'Dropdowns',
    url: '/ui/dropdowns',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-list-group',
    label: 'List Group',
    url: '/ui/list-group',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-modals',
    label: 'Modals',
    url: '/ui/modals',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-tabs',
    label: 'Tabs',
    url: '/ui/tabs',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-offcanvas',
    label: 'Offcanvas',
    url: '/ui/offcanvas',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-pagination',
    label: 'Pagination',
    url: '/ui/pagination',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-placeholders',
    label: 'Placeholders',
    url: '/ui/placeholders',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-popovers',
    label: 'Popovers',
    url: '/ui/popovers',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-progress',
    label: 'Progress',
    url: '/ui/progress',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-spinners',
    label: 'Spinners',
    url: '/ui/spinners',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-toasts',
    label: 'Toasts',
    url: '/ui/toasts',
    parentKey: 'base-ui'
  }, {
    key: 'base-ui-tooltips',
    label: 'Tooltips',
    url: '/ui/tooltips',
    parentKey: 'base-ui'
  }]
}, {
  key: 'advanced-ui',
  icon: 'iconamoon:component-duotone',
  label: 'Advanced UI',
  children: [{
    key: 'advanced-ui-ratings',
    label: 'Ratings',
    url: '/advanced/ratings',
    parentKey: 'advanced-ui'
  }, {
    key: 'advanced-ui-sweet-alert',
    label: 'Sweet Alert',
    url: '/advanced/alert',
    parentKey: 'advanced-ui'
  }, {
    key: 'advanced-ui-swiper-slider',
    label: 'Swiper Slider',
    url: '/advanced/swiper',
    parentKey: 'advanced-ui'
  }, {
    key: 'advanced-ui-scrollbar',
    label: 'Scrollbar',
    url: '/advanced/scrollbar',
    parentKey: 'advanced-ui'
  }, {
    key: 'advanced-ui-toastify',
    label: 'Toastify',
    url: '/advanced/toastify',
    parentKey: 'advanced-ui'
  }]
}, {
  key: 'charts',
  icon: 'iconamoon:3d-duotone',
  label: 'Charts',
  children: [{
    key: 'charts-area',
    label: 'Area',
    url: '/charts/area',
    parentKey: 'charts'
  }, {
    key: 'charts-bar',
    label: 'Bar',
    url: '/charts/bar',
    parentKey: 'charts'
  }, {
    key: 'charts-bubble',
    label: 'Bubble',
    url: '/charts/bubble',
    parentKey: 'charts'
  }, {
    key: 'charts-candle-stick',
    label: 'Candle Stick',
    url: '/charts/candlestick',
    parentKey: 'charts'
  }, {
    key: 'charts-column',
    label: 'Column',
    url: '/charts/column',
    parentKey: 'charts'
  }, {
    key: 'charts-heatmap',
    label: 'Heatmap',
    url: '/charts/heatmap',
    parentKey: 'charts'
  }, {
    key: 'charts-line',
    label: 'Line',
    url: '/charts/line',
    parentKey: 'charts'
  }, {
    key: 'charts-mixed',
    label: 'Mixed',
    url: '/charts/mixed',
    parentKey: 'charts'
  }, {
    key: 'charts-timeline',
    label: 'Timeline',
    url: '/charts/timeline',
    parentKey: 'charts'
  }, {
    key: 'charts-boxplot',
    label: 'Boxplot',
    url: '/charts/boxplot',
    parentKey: 'charts'
  }, {
    key: 'charts-treemap',
    label: 'Treemap',
    url: '/charts/treemap',
    parentKey: 'charts'
  }, {
    key: 'charts-pie',
    label: 'Pie',
    url: '/charts/pie',
    parentKey: 'charts'
  }, {
    key: 'charts-radar',
    label: 'Radar',
    url: '/charts/radar',
    parentKey: 'charts'
  }, {
    key: 'charts-radial-bar',
    label: 'Radial Bar',
    url: '/charts/radial-bar',
    parentKey: 'charts'
  }, {
    key: 'charts-scatter',
    label: 'Scatter',
    url: '/charts/scatter',
    parentKey: 'charts'
  }, {
    key: 'charts-polar-area',
    label: 'Polar Area',
    url: '/charts/polar',
    parentKey: 'charts'
  }]
}, {
  key: 'forms',
  icon: 'iconamoon:cheque-duotone',
  label: 'Forms',
  children: [{
    key: 'forms-basic-elements',
    label: 'Basic Elements',
    url: '/forms/basic',
    parentKey: 'forms'
  }, {
    key: 'forms-checkbox&radio',
    label: 'Checkbox & Radio',
    url: '/forms/checkbox',
    parentKey: 'forms'
  }, {
    key: 'forms-choice-select',
    label: 'Choice Select',
    url: '/forms/select',
    parentKey: 'forms'
  }, {
    key: 'forms-clipboard',
    label: 'Clipboard',
    url: '/forms/clipboard',
    parentKey: 'forms'
  }, {
    key: 'forms-flat-picker',
    label: 'Flat Picker',
    url: '/forms/flat-picker',
    parentKey: 'forms'
  }, {
    key: 'forms-validation',
    label: 'Validation',
    url: '/forms/validation',
    parentKey: 'forms'
  }, {
    key: 'forms-wizard',
    label: 'Wizard',
    url: '/forms/wizard',
    parentKey: 'forms'
  }, {
    key: 'forms-file-uploads',
    label: 'File Uploads',
    url: '/forms/file-uploads',
    parentKey: 'forms'
  }, {
    key: 'forms-editors',
    label: 'Editors',
    url: '/forms/editors',
    parentKey: 'forms'
  }, {
    key: 'forms-input-mask',
    label: 'Input Mask',
    url: '/forms/input-mask',
    parentKey: 'forms'
  }, {
    key: 'forms-slider',
    label: 'Slider',
    url: '/forms/slider',
    parentKey: 'forms'
  }]
}, {
  key: 'tables',
  icon: 'iconamoon:box-duotone',
  label: 'Tables',
  children: [{
    key: 'tables-basic',
    label: 'Basic Tables',
    url: '/tables/basic',
    parentKey: 'tables'
  }, {
    key: 'tables-grid-js',
    label: 'Grid JS',
    url: '/tables/gridjs',
    parentKey: 'tables'
  }]
}, {
  key: 'icons',
  icon: 'iconamoon:lightning-1-duotone',
  label: 'Icons',
  children: [{
    key: 'icons-boxicons',
    label: 'Boxicons',
    url: '/icons/boxicons',
    parentKey: 'icons'
  }, {
    key: 'icons-iconamoon',
    label: 'IconaMoon',
    url: '/icons/iconamoon',
    parentKey: 'icons'
  }]
}, {
  key: 'maps',
  icon: 'iconamoon:location-pin-duotone',
  label: 'Maps',
  children: [{
    key: 'maps-google',
    label: 'Google',
    url: '/maps/google',
    parentKey: 'maps'
  }, {
    key: 'maps-vector',
    label: 'Vector',
    url: '/maps/vector',
    parentKey: 'maps'
  }]
}, {
  key: 'badge-menu',
  icon: 'iconamoon:badge-duotone',
  label: 'Badge Menu'
}, {
  key: 'menuitem',
  icon: 'iconamoon:folder-add-duotone',
  label: 'Menu Item',
  children: [{
    key: 'menu-item-1',
    label: 'Menu Item 1',
    parentKey: 'menuitem'
  }, {
    key: 'menu-item-2',
    label: 'Menu Item 2',
    parentKey: 'menuitem',
    children: [{
      key: 'menu-sub-item',
      label: 'Menu Sub Item',
      parentKey: 'menu-item-2'
    }]
  }]
}, {
  key: 'disabled-item',
  icon: 'iconamoon:unavailable-duotone',
  label: 'Disabled Item',
  isDisabled: true
}];