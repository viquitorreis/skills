import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
// import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  items: MenuItem[] | undefined;
  // public ref: DynamicDialogRef | undefined;

  // constructor(public dialogService: DialogService) {}

  ngOnInit() {
      this.items = [
        {
          label: 'Principal',
          icon: 'pi pi-fw pi-home',
          routerLink: '/admin'
        },
        {
            label: 'Cards',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Criar',
                    icon: 'pi pi-fw pi-plus',
                    // items: [
                    //     {
                    //         label: 'Bookmark',
                    //         icon: 'pi pi-fw pi-bookmark'
                    //     },
                    //     {
                    //         label: 'Video',
                    //         icon: 'pi pi-fw pi-video'
                    //     }
                    // ]
                    command(event) {
                      // alert("Implementa lá lindão")
                      // console.log(event)
                      // this.ref = this.dialogService.open(CardComponent, {
                      //   header: 'Selecione um produto',
                      //   width: '50vw',
                      //   modal:true,
                      //   breakpoints: {
                      //       '960px': '75vw',
                      //       '640px': '90vw'
                      //   },
                      // })
                    },
                },
                {
                    label: 'Página principal',
                    icon: 'pi pi-fw pi-desktop'
                },
            ]
        },
        // {
        //     label: 'Edit',
        //     icon: 'pi pi-fw pi-pencil',
        //     items: [
        //         {
        //             label: 'Left',
        //             icon: 'pi pi-fw pi-align-left'
        //         },
        //         {
        //             label: 'Right',
        //             icon: 'pi pi-fw pi-align-right'
        //         },
        //         {
        //             label: 'Center',
        //             icon: 'pi pi-fw pi-align-center'
        //         },
        //         {
        //             label: 'Justify',
        //             icon: 'pi pi-fw pi-align-justify'
        //         }
        //     ]
        // },
        {
            label: 'Usuários',
            icon: 'pi pi-fw pi-user',
        },
        {
            label: 'Sair',
            icon: 'pi pi-fw pi-power-off'
        }
    ];
  }
}
