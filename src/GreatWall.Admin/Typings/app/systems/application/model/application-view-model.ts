﻿import { ViewModel } from '../../../../util';

/**
 * 应用程序视图模型
 */
export class ApplicationViewModel extends ViewModel {
    /**
     * 应用程序编码
     */
    code;
    /**
     * 应用程序名称
     */
    name;
    /**
     * 启用
     */
    enabled;
    /**
     * 启用注册
     */
    registerEnabled;
    /**
     * 备注
     */
    remark;
    /**
     * 创建时间
     */
    creationTime;
    /**
     * 创建人编号
     */
    creatorId;
    /**
     * 最后修改时间
     */
    lastModificationTime;
    /**
     * 最后修改人编号
     */
    lastModifierId;
    /**
     * 版本号
     */
    version;
}