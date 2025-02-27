﻿import { TreeViewModel } from '../../../../util';

/**
 * 模块视图模型
 */
export class ModuleViewModel extends TreeViewModel {
    /**
     * 应用程序标识
     */
    applicationId;
    /**
     * 应用程序名称
     */
    applicationName;
    /**
     * 模块名称
     */
    name;
    /**
     * 模块地址
     */
    url;
    /**
     * 图标
     */
    icon;
    /**
     * 备注
     */
    remark;
    /**
     * 创建时间
     */
    creationTime;
    /**
     * 版本号
     */
    version;
}