import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDataPage } from './add-data';
import { EditDataPage } from '../edit-data/edit-data';
import { Toast } from '@ionic-native/toast';
import { ErrorHandler} from '@angular/core';
import { SQLite, SQLiteDatabaseConfig, SQLiteObject, SQLiteTransaction } from '@ionic-native/sqlite';
import { MyApp } from '../../app/app.component';
import { HomePage } from '../home/home';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AddDataPage,MyApp,HomePage,EditDataPage
  ],
  imports: [
    IonicPageModule.forChild(AddDataPage),
   ],
  entryComponents: [MyApp, HomePage, EditDataPage, AddDataPage],
  providers: [
    SQLite,
    Toast,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AddDataPageModule {}
