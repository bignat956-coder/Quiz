// src/app/demo-ng-zorro-antd.module.ts

import { NgModule } from '@angular/core';

// Import all the NG-ZORRO modules
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { NzModalModule } from 'ng-zorro-antd/modal';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSplitterModule } from 'ng-zorro-antd/splitter';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzWaterMarkModule } from 'ng-zorro-antd/water-mark';
// 1. ADD THE NOTIFICATION MODULE IMPORT HERE


// Create a constant array of all the modules
const ZORRO_MODULES = [
  NzAffixModule,
    NzAlertModule,
      NzAnchorModule,
        NzAutocompleteModule,
          NzAvatarModule,
            NzBackTopModule,
              NzBadgeModule,
                NzBreadCrumbModule,
                  NzButtonModule,
                    NzCalendarModule,
                      NzCardModule,
                        NzCarouselModule,
                          NzCascaderModule,
                            NzCheckboxModule,
                              NzCollapseModule,
                                NzColorPickerModule,
                                  NzDatePickerModule,
                                    NzDescriptionsModule,
                                      NzDividerModule,
                                        NzDrawerModule,
                                          NzDropDownModule,
                                            NzEmptyModule,
                                              NzFlexModule,
                                                NzFloatButtonModule,
                                                  NzFormModule,
                                                    NzGridModule,
                                                      NzIconModule,
                                                        NzImageModule,
                                                          NzInputModule,
                                                            NzInputNumberModule,
                                                              NzLayoutModule,
                                                                NzListModule,
                                                                  NzMentionModule,
                                                                    NzMenuModule,
                                                                      
                                                                        NzModalModule,
                                                                         
                                                                            NzPageHeaderModule,
                                                                              NzPaginationModule,
                                                                                NzPopconfirmModule,
                                                                                  NzPopoverModule,
                                                                                    NzProgressModule,
                                                                                      NzQRCodeModule,
                                                                                        NzRadioModule,
                                                                                          NzRateModule,
                                                                                            NzResultModule,
                                                                                              NzSegmentedModule,
                                                                                                NzSelectModule,
                                                                                                  NzSkeletonModule,
                                                                                                    NzSliderModule,
                                                                                                      NzSpaceModule,
                                                                                                        NzSpinModule,
                                                                                                          NzSplitterModule,
                                                                                                            NzStatisticModule,
                                                                                                              NzStepsModule,
                                                                                                                NzSwitchModule,
                                                                                                                  NzTableModule,
                                                                                                                    NzTabsModule,
                                                                                                                      NzTagModule,
                                                                                                                        NzTimePickerModule,
                                                                                                                          NzTimelineModule,
                                                                                                                            NzToolTipModule,
                                                                                                                              NzTransferModule,
                                                                                                                                NzTreeModule,
                                                                                                                                  NzTreeSelectModule,
                                                                                                                                    NzTreeViewModule,
                                                                                                                                      NzTypographyModule,
                                                                                                                                        NzUploadModule,
                                                                                                                                          NzWaterMarkModule
                                                                                                                                          ];

                                                                                                                                          @NgModule({
                                                                                                                                            declarations: [],
                                                                                                                                              imports: [
                                                                                                                                                  ...ZORRO_MODULES
                                                                                                                                                    ],
                                                                                                                                                      exports: [
                                                                                                                                                          ...ZORRO_MODULES
                                                                                                                                                            ]
                                                                                                                                                            })
                                                                                                                                                            export class DemoNgZoroAntdModule { }

                                                                                                                                                            
