import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import VideoApp from "./video.app";
import cloureveApp from "../reducers";

const defaultStatus = {
    navigator: {
        path: window.path,
        refresh: true,
    },
    viewUpdate: {
        open: window.isHomePage,
        explorerViewMethod: "icon",
        sortMethod: "timePos",
        contextType: "none",
        menuOpen: false,
        navigatorLoading: true,
        navigatorError: false,
        navigatorErrorMsg: null,
        modalsLoading: false,
        storageRefresh: false,
        modals: {
            createNewFolder: false,
            rename: false,
            move: false,
            remove: false,
            share: false,
            music: false,
            remoteDownload: false,
            torrentDownload: false,
        },
        snackbar: {
            toggle: false,
            vertical: "top",
            horizontal: "center",
            msg: "",
            color: "",
        },
    },
    explorer: {
        fileList: [],
        dirList: [],
        selected: [],
        selectProps: {
            isMultiple: false,
            withFolder: false,
            withFile: false,
        },
        imgPreview: {
            first: null,
            other: [],
        },
        keywords: null,
    },
};

const store = createStore(cloureveApp, defaultStatus);
ReactDOM.render(
    <Provider store={store}>
        <VideoApp />
    </Provider>,
    document.getElementById("root")
);
