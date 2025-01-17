import { BaseComponentRender } from '@univerjs/base-component';
import { DocPlugin } from '@univerjs/base-docs';
import { <%= projectConstantValue %>_PLUGIN_NAME } from '../Basic/Const';
import { <%= projectUpperValue %>Plugin } from '../<%= projectUpperValue %>Plugin';

export class <%= projectUpperValue %>Controller {
    protected _docPlugin: DocPlugin;

    protected _plugin: <%= projectUpperValue %>Plugin;

    protected _render: BaseComponentRender;

    constructor(plugin: <%= projectUpperValue %>Plugin) {
        this._plugin = plugin;
    }
}
