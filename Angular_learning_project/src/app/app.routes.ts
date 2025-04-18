import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { UserComponent } from './user/user.component';
import { Component } from '@angular/core';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { SignalComponent } from './signal/signal.component';
import { LinkedsignalComponent } from './linkedsignal/linkedsignal.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

export const routes: Routes = [{
    path:'',
    redirectTo:'admin',
    pathMatch:'full'

},

    {
        path:'admin',
        component:AdminComponent
    },
    {
        path:'databinding',
        component:DatabindingComponent
    },
    {
        path:'user',
        component:UserComponent
    },
    {
        path:'ng-if',
        component:NgIfComponent
    },
    {
        path:'ng-style',
        component:NgStyleComponent
    },
    {
        path:'ng-class',
        component:NgClassComponent
    },
    {
        path:'ng-for',
        component:NgForComponent
    },
    {
        path:'conditional',
        component:ConditionalComponent
    },{
        path:'signal',
        component:SignalComponent
    }
    ,{
        path:'linkedsignal',
        component:LinkedsignalComponent
    },
    {
        path:"template-forms",
        component:TemplateFormsComponent
    }
];
