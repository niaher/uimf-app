import * as umf from "uimf-core";
import { UmfServer, UmfApp } from "core-framework";
import * as handlers from "core-handlers";

import controlRegister from "./ControlRegister";
import { AppRouter } from "./AppRouter";
import Menu from "components/Menu";

var server = new UmfServer(
    "http://localhost:58335/api/form/metadata",
    "http://localhost:58335/api/form/run");

var app = new UmfApp(server, controlRegister);

app.load().then(response => {
    var router = new AppRouter(document.getElementById("main"), app);
    app.useRouter(router);

    app.registerResponseHandler(new handlers.MessageResponseHandler());
    app.registerResponseHandler(new handlers.ReloadResponseHandler((form, inputFieldValues) => {
        return app.load().then(t => {
            buildMenu(app);
            return app.makeUrl(form, inputFieldValues);
        });
    }));
    app.registerResponseHandler(new handlers.RedirectResponseHandler((form, inputFieldValues) => {
        app.go(form, inputFieldValues);
    }));

    buildMenu(app);
});

function buildMenu(app:UmfApp) {
    // Remove old menu.
    var myNode = document.getElementById("topmenu");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    new Menu({
        target: document.getElementById("topmenu"),
        data: {
            forms: app.forms,
            getMenu: (form: umf.FormMetadata) => {
                if (form.customProperties != null) {
                    return app.getMenu(form.customProperties.menu);
                }

                return null;
            },
            makeUrl: (formId: string) => app.makeUrl(formId, null)
        }
    });
}