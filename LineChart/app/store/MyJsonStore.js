/*
 * File: app/store/MyJsonStore.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('LineChartDemo.store.MyJsonStore', {
    extend: 'Ext.data.Store',

    requires: [
        'LineChartDemo.model.ReportModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.field.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyJsonStore',
            autoLoad: true,
            model: 'LineChartDemo.model.ReportModel',
            proxy: {
                type: 'ajax',
                url: 'data/reportData.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
            fields: [
                {
                    name: 'waferId'
                },
                {
                    name: 'ex'
                },
                {
                    name: 'ey'
                },
                {
                    name: 'tx'
                },
                {
                    name: 'ty'
                }
            ]
        }, cfg)]);
    }
});