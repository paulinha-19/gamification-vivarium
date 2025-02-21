(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"backgroundColorRatios":[0],"start":"this.init()","layout":"absolute","id":"rootPlayer","minWidth":0,"data":{"locales":{"pt":"locale/pt.txt"},"displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"rate":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false},"defaultLocale":"pt","name":"Player2448","history":{}},"backgroundColor":["#FFFFFF"],"class":"Player","minHeight":0,"propagateClick":false,"scripts":{"getMediaHeight":TDV.Tour.Script.getMediaHeight,"executeJS":TDV.Tour.Script.executeJS,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"initAnalytics":TDV.Tour.Script.initAnalytics,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"clone":TDV.Tour.Script.clone,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"openLink":TDV.Tour.Script.openLink,"isPanorama":TDV.Tour.Script.isPanorama,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"downloadFile":TDV.Tour.Script.downloadFile,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showWindow":TDV.Tour.Script.showWindow,"toggleVR":TDV.Tour.Script.toggleVR,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPixels":TDV.Tour.Script.getPixels,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaByName":TDV.Tour.Script.getMediaByName,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"mixObject":TDV.Tour.Script.mixObject,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showPopupImage":TDV.Tour.Script.showPopupImage,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"cloneBindings":TDV.Tour.Script.cloneBindings,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"enableVR":TDV.Tour.Script.enableVR,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"shareSocial":TDV.Tour.Script.shareSocial,"setValue":TDV.Tour.Script.setValue,"init":TDV.Tour.Script.init,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizStart":TDV.Tour.Script.quizStart,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizFinish":TDV.Tour.Script.quizFinish,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getComponentByName":TDV.Tour.Script.getComponentByName,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"registerKey":TDV.Tour.Script.registerKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"initQuiz":TDV.Tour.Script.initQuiz,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"existsKey":TDV.Tour.Script.existsKey,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"startMeasurement":TDV.Tour.Script.startMeasurement,"disableVR":TDV.Tour.Script.disableVR,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"unregisterKey":TDV.Tour.Script.unregisterKey,"textToSpeech":TDV.Tour.Script.textToSpeech,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getKey":TDV.Tour.Script.getKey,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getOverlays":TDV.Tour.Script.getOverlays,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playAudioList":TDV.Tour.Script.playAudioList,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"translate":TDV.Tour.Script.translate,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"createTween":TDV.Tour.Script.createTween,"setLocale":TDV.Tour.Script.setLocale,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"resumePlayers":TDV.Tour.Script.resumePlayers,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel},"defaultMenu":["fullscreen","mute","rotation"],"hash": "0dea39b47b68b48cfa9cd5c6ca6bde8b49d7022f19df5a7badb3f00bf148b45d", "definitions": [{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","id":"panorama_11755EA8_1C4E_530A_41BB_E44F4BA3FFA0_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_109B2E37_1C4E_5306_4161_559D00E50C08"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","id":"panorama_10876F87_1C4E_7105_41A0_8A35B16FA713_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_109F4E3B_1C4E_530E_4194_8603286C1841"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","id":"panorama_1086F44F_1C4E_5705_419C_DC4B1003F0E6_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_109F2E3C_1C4E_530A_41B4_B9C1A9676119"},{"thumbnailUrl":"media/panorama_10876F87_1C4E_7105_41A0_8A35B16FA713_t.webp","label":trans('panorama_10876F87_1C4E_7105_41A0_8A35B16FA713.label'),"overlays":["this.overlay_292E2685_2639_0582_41A9_310E15BB3767"],"hfovMax":130,"frames":[{"cube":{"levels":[{"width":3072,"url":"media/panorama_10876F87_1C4E_7105_41A0_8A35B16FA713_0/{face}/0/{row}_{column}.webp","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_10876F87_1C4E_7105_41A0_8A35B16FA713_t.webp"}],"id":"panorama_10876F87_1C4E_7105_41A0_8A35B16FA713","hfov":360,"data":{"label":"img3"},"class":"Panorama","hfovMin":"150%","vfov":180},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","id":"panorama_1087398D_1C4E_510A_41B8_4853BFD5197B_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_109EFE3C_1C4E_530A_41A1_AF74577BAFE2"},{"keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","displayPlaybackBar":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","aaEnabled":true,"class":"PanoramaPlayer"},{"items":[{"class":"PanoramaPlayListItem","media":"this.panorama_11755EA8_1C4E_530A_41BB_E44F4BA3FFA0","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_11755EA8_1C4E_530A_41BB_E44F4BA3FFA0_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","media":"this.panorama_10865B42_1C4E_717F_41B5_1FA8C52FF677","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_10865B42_1C4E_717F_41B5_1FA8C52FF677_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","media":"this.panorama_10876F87_1C4E_7105_41A0_8A35B16FA713","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_10876F87_1C4E_7105_41A0_8A35B16FA713_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"PanoramaPlayListItem","media":"this.panorama_1086F44F_1C4E_5705_419C_DC4B1003F0E6","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_1086F44F_1C4E_5705_419C_DC4B1003F0E6_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"class":"PanoramaPlayListItem","media":"this.panorama_1087398D_1C4E_510A_41B8_4853BFD5197B","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_1087398D_1C4E_510A_41B8_4853BFD5197B_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"thumbnailUrl":"media/panorama_1086F44F_1C4E_5705_419C_DC4B1003F0E6_t.webp","label":trans('panorama_1086F44F_1C4E_5705_419C_DC4B1003F0E6.label'),"overlays":["this.overlay_2962851E_2639_04BE_4193_2D7FA9CA3D0B"],"hfovMax":130,"frames":[{"cube":{"levels":[{"width":3072,"url":"media/panorama_1086F44F_1C4E_5705_419C_DC4B1003F0E6_0/{face}/0/{row}_{column}.webp","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_1086F44F_1C4E_5705_419C_DC4B1003F0E6_t.webp"}],"id":"panorama_1086F44F_1C4E_5705_419C_DC4B1003F0E6","hfov":360,"data":{"label":"img4"},"class":"Panorama","hfovMin":"150%","vfov":180},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","id":"panorama_10865B42_1C4E_717F_41B5_1FA8C52FF677_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_109F7E3B_1C4E_530E_41B7_B4402E9DAE33"},{"thumbnailUrl":"media/panorama_1087398D_1C4E_510A_41B8_4853BFD5197B_t.webp","label":trans('panorama_1087398D_1C4E_510A_41B8_4853BFD5197B.label'),"overlays":["this.overlay_2946F0C7_263F_1D8E_41C1_890C5DF979B1"],"hfovMax":130,"frames":[{"cube":{"levels":[{"width":3072,"url":"media/panorama_1087398D_1C4E_510A_41B8_4853BFD5197B_0/{face}/0/{row}_{column}.webp","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_1087398D_1C4E_510A_41B8_4853BFD5197B_t.webp"}],"id":"panorama_1087398D_1C4E_510A_41B8_4853BFD5197B","hfov":360,"data":{"label":"img5"},"class":"Panorama","hfovMin":"150%","vfov":180},{"thumbnailUrl":"media/panorama_10865B42_1C4E_717F_41B5_1FA8C52FF677_t.webp","label":trans('panorama_10865B42_1C4E_717F_41B5_1FA8C52FF677.label'),"overlays":["this.overlay_2858094F_2639_0C9E_41BF_A7FA7EE226A7"],"hfovMax":130,"frames":[{"cube":{"levels":[{"width":3072,"url":"media/panorama_10865B42_1C4E_717F_41B5_1FA8C52FF677_0/{face}/0/{row}_{column}.webp","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_10865B42_1C4E_717F_41B5_1FA8C52FF677_t.webp"}],"id":"panorama_10865B42_1C4E_717F_41B5_1FA8C52FF677","hfov":360,"data":{"label":"img2"},"class":"Panorama","hfovMin":"150%","vfov":180},{"playbackBarHeadWidth":6,"width":"100%","subtitlesFontColor":"#FFFFFF","playbackBarProgressBorderSize":0,"minWidth":100,"playbackBarBackgroundColorDirection":"vertical","minHeight":50,"toolTipPaddingRight":6,"playbackBarRight":0,"data":{"name":"Main Viewer"},"playbackBarBackgroundOpacity":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderRadius":0,"subtitlesFontFamily":"Arial","vrPointerColor":"#FFFFFF","toolTipBorderColor":"#767676","progressBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"vrThumbstickRotationStep":20,"subtitlesTextShadowVerticalLength":1,"progressOpacity":0.7,"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","toolTipShadowColor":"#333138","toolTipTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesTop":0,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadBorderRadius":0,"subtitlesBottom":50,"vrPointerSelectionColor":"#FF6600","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarBorderSize":0,"progressBackgroundColor":["#000000"],"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarLeft":0,"progressBottom":10,"subtitlesTextShadowColor":"#000000","id":"MainViewer","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","progressHeight":2,"subtitlesFontSize":"3vmin","progressBarBorderRadius":2,"progressBorderSize":0,"class":"ViewerArea","propagateClick":false,"playbackBarHeadBorderSize":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadow":true,"progressBarBorderSize":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontSize":"1.11vmin","playbackBarBottom":5,"toolTipPaddingBottom":4,"subtitlesBackgroundOpacity":0.2,"toolTipPaddingTop":4,"progressBorderRadius":2,"toolTipFontFamily":"Arial","progressLeft":"33%","vrPointerSelectionTime":2000,"subtitlesTextShadowOpacity":1,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontColor":"#606060","toolTipPaddingLeft":6,"subtitlesGap":0,"height":"100%","playbackBarHeight":10,"subtitlesBorderColor":"#FFFFFF","firstTransitionDuration":0,"surfaceReticleSelectionColor":"#FFFFFF"},{"thumbnailUrl":"media/panorama_11755EA8_1C4E_530A_41BB_E44F4BA3FFA0_t.webp","label":trans('panorama_11755EA8_1C4E_530A_41BB_E44F4BA3FFA0.label'),"overlays":["this.overlay_2B84BA2E_263B_0C9E_41BF_957AC1825189"],"hfovMax":130,"frames":[{"cube":{"levels":[{"width":3072,"url":"media/panorama_11755EA8_1C4E_530A_41BB_E44F4BA3FFA0_0/{face}/0/{row}_{column}.webp","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_11755EA8_1C4E_530A_41BB_E44F4BA3FFA0_t.webp"}],"id":"panorama_11755EA8_1C4E_530A_41BB_E44F4BA3FFA0","hfov":360,"data":{"label":"img1"},"class":"Panorama","hfovMin":"150%","vfov":180},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_109B2E37_1C4E_5306_4161_559D00E50C08"},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_109F4E3B_1C4E_530E_4194_8603286C1841"},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_109F2E3C_1C4E_530A_41B4_B9C1A9676119"},{"data":{"label":"open_question_3"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-0.56,"class":"HotspotPanoramaOverlayImage","yaw":-12.47,"distance":100,"image":"this.AnimatedImageResource_0F229F72_264F_0486_41BC_182C91DE1242","hfov":10.5,"scaleMode":"fit_inside","vfov":10.5,"data":{"label":"open_question_3"}}],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_2921468A_2639_0586_41BC_A1520E85AA57"],"maps":[],"id":"overlay_292E2685_2639_0582_41A9_310E15BB3767","enabledInCardboard":true},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_109EFE3C_1C4E_530A_41A1_AF74577BAFE2"},{"data":{"label":"open_question_4"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-1.48,"class":"HotspotPanoramaOverlayImage","yaw":14.29,"distance":100,"image":"this.AnimatedImageResource_0F234F72_264F_0486_41A1_07475EEB5726","hfov":10.5,"scaleMode":"fit_inside","vfov":10.5,"data":{"label":"open_question_4"}}],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_29BAA546_2639_048E_4194_A963EF6B5CE9"],"maps":[],"id":"overlay_2962851E_2639_04BE_4193_2D7FA9CA3D0B","enabledInCardboard":true},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_109F7E3B_1C4E_530E_41B7_B4402E9DAE33"},{"data":{"label":"open_question_5"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-5.03,"class":"HotspotPanoramaOverlayImage","yaw":-8.56,"distance":100,"image":"this.AnimatedImageResource_0F230F73_264F_0486_41C0_9270D2138834","hfov":10.5,"scaleMode":"fit_inside","vfov":10.5,"data":{"label":"open_question_5"}}],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_29A5E0EB_263F_1D85_41A9_D04567ABDAE5"],"maps":[],"id":"overlay_2946F0C7_263F_1D8E_41C1_890C5DF979B1","enabledInCardboard":true},{"data":{"label":"open_question_2"},"class":"HotspotPanoramaOverlay","items":[{"pitch":1.43,"class":"HotspotPanoramaOverlayImage","yaw":-7.63,"distance":100,"image":"this.AnimatedImageResource_0F22DF72_264F_0486_4195_71D1F3FAC0E9","hfov":10.5,"scaleMode":"fit_inside","vfov":10.5,"data":{"label":"open_question_2"}}],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_28A30971_2639_0C82_41BF_E7FA81634ACD"],"maps":[],"id":"overlay_2858094F_2639_0C9E_41BF_A7FA7EE226A7","enabledInCardboard":true},{"data":{"label":"open_question_1"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-4.22,"class":"HotspotPanoramaOverlayImage","yaw":13.52,"distance":100,"image":"this.AnimatedImageResource_0F22EF72_264F_0486_41C0_470E056155A9","hfov":10.5,"scaleMode":"fit_inside","vfov":10.5,"data":{"label":"open_question_1"}}],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_281D7A97_263B_0D8E_41BC_BFEB8400F973"],"maps":[],"id":"overlay_2B84BA2E_263B_0C9E_41BF_957AC1825189","enabledInCardboard":true},{"class":"AnimatedImageResource","levels":[{"width":168,"url":"media/res_115DBE92_265B_0586_41C2_83B5F7F0AEE3_0.webp","height":252,"class":"ImageResourceLevel"}],"rowCount":6,"frameCount":24,"finalFrame":"first","frameDuration":41,"colCount":4,"id":"AnimatedImageResource_0F229F72_264F_0486_41BC_182C91DE1242"},{"click":"try{eval('openQuizModal(\"img3\");')}catch(e){console.log(e)}","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_2921468A_2639_0586_41BC_A1520E85AA57"},{"class":"AnimatedImageResource","levels":[{"width":168,"url":"media/res_115DBE92_265B_0586_41C2_83B5F7F0AEE3_0.webp","height":252,"class":"ImageResourceLevel"}],"rowCount":6,"frameCount":24,"finalFrame":"first","frameDuration":41,"colCount":4,"id":"AnimatedImageResource_0F234F72_264F_0486_41A1_07475EEB5726"},{"click":"try{eval('openQuizModal(\"img4\");')}catch(e){console.log(e)}","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_29BAA546_2639_048E_4194_A963EF6B5CE9"},{"class":"AnimatedImageResource","levels":[{"width":168,"url":"media/res_115DBE92_265B_0586_41C2_83B5F7F0AEE3_0.webp","height":252,"class":"ImageResourceLevel"}],"rowCount":6,"frameCount":24,"finalFrame":"first","frameDuration":41,"colCount":4,"id":"AnimatedImageResource_0F230F73_264F_0486_41C0_9270D2138834"},{"click":"try{eval('openQuizModal(\"img5\");')}catch(e){console.log(e)}","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_29A5E0EB_263F_1D85_41A9_D04567ABDAE5"},{"class":"AnimatedImageResource","levels":[{"width":168,"url":"media/res_115DBE92_265B_0586_41C2_83B5F7F0AEE3_0.webp","height":252,"class":"ImageResourceLevel"}],"rowCount":6,"frameCount":24,"finalFrame":"first","frameDuration":41,"colCount":4,"id":"AnimatedImageResource_0F22DF72_264F_0486_4195_71D1F3FAC0E9"},{"click":"try{eval('openQuizModal(\"img2\");')}catch(e){console.log(e)}","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_28A30971_2639_0C82_41BF_E7FA81634ACD"},{"class":"AnimatedImageResource","levels":[{"width":168,"url":"media/res_115DBE92_265B_0586_41C2_83B5F7F0AEE3_0.webp","height":252,"class":"ImageResourceLevel"}],"rowCount":6,"frameCount":24,"finalFrame":"first","frameDuration":41,"colCount":4,"id":"AnimatedImageResource_0F22EF72_264F_0486_41C0_470E056155A9"},{"click":"try{eval('openQuizModal(\"img1\");')}catch(e){console.log(e)}","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"any","id":"HotspotPanoramaOverlayArea_281D7A97_263B_0D8E_41BC_BFEB8400F973"}],"scrollBarColor":"#000000","height":"100%","children":["this.MainViewer"],"width":"100%","scrollBarMargin":2,"gap":10};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Thu Feb 20 2025