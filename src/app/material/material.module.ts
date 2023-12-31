import {NgModule} from '@angular/core';
// material.module.ts
 
import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
    imports: [
        MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        MatNativeDateModule
    ],
    exports: [
        MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        MatNativeDateModule
    ],
    providers: [     
    ]
})
export class MaterialModule {
    // constructor(public matIconRegistry: MatIconRegistry) {
    //     // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    // }

    // static forRoot(): ModuleWithProviders<MaterialModule> {
    //     return {
    //         ngModule: MaterialModule,
    //         providers: [MatIconRegistry]
    //     };
    // }
}


// import {
//   MatAutocompleteModule,
//   MatButtonModule,
//   MatButtonToggleModule,
//   MatCardModule,
//   MatCheckboxModule,
//   MatChipsModule,
//   MatDatepickerModule, MatDialogModule,
//   MatExpansionModule,
//   MatFormFieldModule,
//   MatGridListModule,
//   MatIconModule,
//   MatInputModule,
//   MatListModule,
//   MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
//   MatProgressSpinnerModule,
//   MatRadioModule,
//   MatSelectModule,
//   MatSidenavModule,
//   MatSliderModule,
//   MatSlideToggleModule, MatSnackBarModule, MatSortModule,
//   MatStepperModule, MatTableModule,
//   MatTabsModule,
//   MatToolbarModule, MatTooltipModule
// } from '@angular/material';


// const materialModules = [
//   MatCheckboxModule,
//   MatInputModule,
//   MatSelectModule,
//   MatRadioModule,
//   MatMenuModule,
//   MatToolbarModule,
//   MatListModule,
//   MatGridListModule,
//   MatCardModule,
//   MatTabsModule,
//   MatButtonModule,
//   MatChipsModule,
//   MatIconModule,
//   MatProgressSpinnerModule,
//   MatProgressBarModule,
//   MatDialogModule,
//   MatTooltipModule,
//   MatSnackBarModule,
//   MatSlideToggleModule,
//   MatTableModule,
//   MatPaginatorModule,
//   MatSortModule,
//   MatAutocompleteModule,
//   MatExpansionModule,
//   MatButtonToggleModule,
//   MatDatepickerModule,
//   MatFormFieldModule,
//   MatSidenavModule,
//   MatSliderModule,
//   MatStepperModule,
//   MatNativeDateModule
// ];

// @NgModule({
//   imports: materialModules,
//   exports: materialModules
// })
// export class MaterialModule {
// }
