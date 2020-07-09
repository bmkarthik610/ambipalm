import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    },{
        path: '/forms',
        title:'Service Provider Management',
        type: 'sub',
        icontype: 'grid_on',
        collapse: 'components',
        children: [
            {path: 'buttons', title: 'Service Provider Dashboard', ab:'B'},
            {path: 'wizard', title: 'Service Provider Sign Up', ab:'GS'},
            {path: 'panels', title: 'Update/ Delete Service Provider', ab:'P'},
            // {path: 'sweet-alert', title: 'Service Provider Earning', ab:'SA'},
            // {path: 'notifications', title: 'Notifications', ab:'N'},
            // {path: 'icons', title: 'Icons', ab:'I'},
            // {path: 'typography', title: 'Typography', ab:'T'}
        ]
    },
    // {
    //     path: '/forms',
    //     title: 'Forms',
    //     type: 'sub',
    //     icontype: 'content_paste',
    //     collapse: 'forms',
    //     children: [
    //         {path: 'regular', title: 'Regular Forms', ab:'RF'},
    //         {path: 'extended', title: 'Extended Forms', ab:'EF'},
    //         {path: 'validation', title: 'Validation Forms', ab:'VF'},
    //         {path: 'wizard', title: 'Wizard', ab:'W'}
    //     ]
    // },
    {
        path: '/tables',
        title: 'End User Management',
        type: 'sub',
        icontype: 'grid_on',
        collapse: 'tables',
        children: [
            {path: 'regular', title: 'End User Profile', ab:'RT'},
            {path: 'extended', title: 'Ride History', ab:'ET'},
            {path: 'datatables.net', title: ' Ride Feedback', ab:'DT'},
            {path: 'regular', title: 'Payment History', ab:'RT'},
            {path: 'extended', title: 'Upcoming Rides', ab:'ET'},
        ]
    }
  
    ,{
        path: '/widgets',
        title: 'Create Rides',
        type: 'link',
        icontype: 'widgets'

    },{
        path: '/charts',
        title: 'Driver Tracking',
        type: 'link',
        icontype: 'timeline'

    },
    ,
    {
        path: '/maps',
        title: 'Live Tracking',
        type: 'sub',
        icontype: 'place',
        collapse: 'maps',
        children: [
            {path: 'google', title: ' Live Tracking by Driver', ab:'GM'},
            {path: 'fullscreen', title: 'Live Tracking by Ride/ End User', ab:'FSM'}]
          
    },
    {
        path: '/calendar',
        title: 'Case Management',
        type: 'sub',
        icontype: 'grid_on',
        collapse: 'calendar',
        children: [
            {path: 'google', title: ' Case Dashboard', ab:'GM'},
            {path: 'fullscreen', title: ' Create Case', ab:'FSM'},
            {path: 'fullscreen', title: 'Update and Close Case', ab:'FSM'}
        ]
          
    }
    // {
    //     path: '/calendar',
    //     title: 'Calendar',
    //     type: 'link',
    //     icontype: 'date_range'
    // },{
    //     path: '/pages',
    //     title: 'Pages',
    //     type: 'sub',
    //     icontype: 'image',
    //     collapse: 'pages',
    //     children: [
    //         {path: 'pricing', title: 'Pricing', ab:'P'},
    //         {path: 'timeline', title: 'Timeline Page', ab:'TP'},
    //         {path: 'login', title: 'Login Page', ab:'LP'},
    //         {path: 'register', title: 'Register Page', ab:'RP'},
    //         {path: 'lock', title: 'Lock Screen Page', ab:'LSP'},
    //         {path: 'user', title: 'User Page', ab:'UP'}
    //     ]
    // }
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ps: any;
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new PerfectScrollbar(elemSidebar);
        }
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
