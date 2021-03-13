import { Component } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
interface MenuNode {
  name: string;
  linksrc: string;
  children?: MenuNode[];
}

const TREE_DATA: MenuNode[] = [
  {
    name: 'Dashboard',
    linksrc: "dashboard",
    children: [
    ]
  }, {
    name: 'Catalog',
    linksrc: "",
    children: [
      {
        name: 'Products',
        linksrc: "products",
        children: []
      }, {
        name: 'Categories',
        linksrc: "",
        children: []
      }, {
        name: 'Manufactureres',
        linksrc: "",
        children: []
      },{
        name: 'Product reviews',
        linksrc: "",
        children: []
      },{
        name: 'Product tags',
        linksrc: "",
        children: []
      },{
        name: 'Attributes',
        linksrc: "",
        children: [
          {
            name: 'Product Attributes',
            linksrc: "",
            children: []
          },
          {
            name: 'Specification Attributes',
            linksrc: "",
            children: []
          },
          {
            name: 'Checkout Attributes',
            linksrc: "",
            children: []
          }  
        ]
      }]},
  {
    name: 'Sales',
    linksrc: "",
    children: [
      {
        name: 'Orders',
        linksrc: "orders",
        children: []  
      },
      {
        name: 'Shipments',
        linksrc: "shipments",
        children: []  
      },
      {
        name: 'Return requests',
        linksrc: "returnrequests",
        children: []  
      },
      {
        name: 'Recurring payments',
        linksrc: "",
        children: []  
      },
      {
        name: 'Gift cards',
        linksrc: "",
        children: []  
      },
      {
        name: 'Shopping carts and wishlists',
        linksrc: "",
        children: []  
      },
    ]  
  },
  {
    name: 'Customers',
    linksrc: "",
    children: [
      {
        name: 'Customers',
        linksrc: "",
        children: []  
      },
      {
        name: 'Customer roles',
        linksrc: "",
        children: []  
      },
      {
        name: 'Onlone customers',
        linksrc: "",
        children: []  
      },
      {
        name: 'Vendors',
        linksrc: "",
        children: []  
      },
      {
        name: 'Activity log',
        linksrc: "",
        children: []  
      },
      {
        name: 'GDPR request (log)',
        linksrc: "",
        children: []  
      },


    ]  
  },
  {
    name: 'Promotions',
    linksrc: "",
    children: [
      {
        name: 'Discounts',
        linksrc: "",
        children: []  
      },
      {
        name: 'Affiliates',
        linksrc: "",
        children: []  
      },
      {
        name: 'Newsletter subscribers',
        linksrc: "",
        children: []  
      },
      {
        name: 'Campaigns',
        linksrc: "",
        children: []  
      },      
    ]  
  },
  {
    name: 'Content management',
    linksrc: "",
    children: [
      {
        name: 'Topics(pages)',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Message templates',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'News items',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'News comments',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Blog posts',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Blog comments',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Polls',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Forums',
        linksrc: "",
        children: []  
      }, 
    ]  
  },
  {
    name: 'Configurations',
    linksrc: "",
    children: [
      {
        name: 'Settings',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Email accounts',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Stores',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Countries',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Languages',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Currencies',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Payment methods',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Payment restrictions',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Tax providers',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Tax categories',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Shipping',
        linksrc: "",
        children: [
          {
            name: 'Shipping providers',
            linksrc: "",
            children: []  
          }, 
          {
            name: 'Warehouses',
            linksrc: "",
            children: []  
          }, 
          {
            name: 'Pickup points',
            linksrc: "",
            children: []  
          }, 
          {
            name: 'Dates and ranges',
            linksrc: "",
            children: []  
          }, 
          {
            name: 'Measures',
            linksrc: "",
            children: []  
          }, 
        ]  
      }, 
      {
        name: 'Access control list',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Widgets',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Authentication',
        linksrc: "",
        children: [
          {
            name: 'External authentication',
            linksrc: "",
            children: []  
          }, 
          {
            name: 'Multi-factor authentication',
            linksrc: "",
            children: []  
          },           

        ]  
      }, 
      {
        name: 'Local plugins',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'All plugin and themes',
        linksrc: "",
        children: []  
      }, 
    ]  
  },
  {
    name: 'System',
    linksrc: "",
    children: [
      {
        name: 'System information',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Log',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Warnings',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Maintenance',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Message queue',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Schedule tasks',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Search engine friendly page names',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Templates',
        linksrc: "",
        children: []  
      }, 
    ]  
  },
  {
    name: 'Reports',
    linksrc: "",
    children: [
      {
        name: 'Sales summary',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Low stock',
        linksrc: "",
        children: []  
      },       
      {
        name: 'Bestsellers',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Products never purchased',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Country sales',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Customer reports',
        linksrc: "",
        children: []  
      }, 
    ]  
  },
  {
    name: 'Help',
    linksrc: "",
    children: [
      {
        name: 'Help topics',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Community forums',
        linksrc: "",
        children: []  
      }, 
      {
        name: 'Premium support services',
        linksrc: "",
        children: []  
      }, 
    ]  
  }
]


/** Flat node with expandable and level information */
interface MenuFlatNode {
  expandable: boolean;
  name: string;
  link: string;
  level: number;
}

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent  {
  private _transformer = (node: MenuNode,  level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      link:node.linksrc,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<MenuFlatNode>(
    node => node.level, node => node.expandable);

treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
   }
  hasChild = (_: number, node: MenuFlatNode) => node.expandable;

  ngOnInit(): void {
  }

}
