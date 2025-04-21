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
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { GETAPIComponent } from './API/get-api/get-api.component';
import { POSTAPIComponent } from './API/post-api/post-api.component';
import { PutApiComponent } from './API/put-api/put-api.component';
import { DeleteApiComponent } from './API/delete-api/delete-api.component';

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
    },
    {
        path:"reactive-forms",
        component:ReactiveFormsComponent
    },
    {
        path:'get-api',
        component:GETAPIComponent
    },
    {
        path:'post-api',
        component:POSTAPIComponent
    },
    {
        path:'put-api',
        component:PutApiComponent
    },
    {
        path:'delete-api',
        component:DeleteApiComponent
    }
];
