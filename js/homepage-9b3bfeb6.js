! function (e, i, t, o) {
    var h = {
        elements: {}
        , selectors: {
            body: "body"
            , heroVideoWrapper: "#hero-video-wrapper"
        }
        , heroVideo: {
            wrapper: "#hero-video-wrapper"
            , aspectRatio: 16 / 9
            , width: 1600
            , height: 900
        }
        , _bindVendors: function () {
            var i = this;
            e("#homepage-hero-video").length && (this.heroVideo.video = videojs("homepage-hero-video", {
                autoplay: !0
                , controls: !1
                , loop: !0
                , preload: "auto"
                , width: i.heroVideo.width
                , height: i.heroVideo.height
            }))
        }
        , _bindEvents: function () {
            var i = this;
            this.elements.window.on("resize", e.throttle(50, function () {
                i.updateVideoSize()
            }))
        }
        , _getElements: function () {
            this.elements = o.getElements(this.selectors), this.elements.window = e(i)
        }
        , setUpVideos: function () {
            var i = e("#instagram video");
            i.each(function () {
                videojs(e(this).attr("id"), {
                    controls: !1
                    , autoplay: !1
                    , loop: !0
                    , width: "100%"
                }, function () {})
            })
        }
        , updateVideoSize: function () {
            var e = this.elements.window.width()
                , i = this.elements.window.height()
                , t = e / i;
            t < this.heroVideo.aspectRatio ? (this.heroVideo.width = i * this.heroVideo.aspectRatio, this.heroVideo.height = i) : (this.heroVideo.width = e, this.heroVideo.height = e / this.heroVideo.aspectRatio), this.elements.heroVideoWrapper.css({
                width: this.heroVideo.width
                , height: this.heroVideo.height
                , "margin-left": -(this.heroVideo.width / 2)
                , "margin-top": -(this.heroVideo.height / 2)
            }), this.heroVideo.video && (this.heroVideo.video.width(this.heroVideo.width), this.heroVideo.video.height(this.heroVideo.height))
        }
        , initialize: function () {
            this._getElements(), this._bindVendors(), this._bindEvents(), this.updateVideoSize()
        }
    };
    i.Homepage = h, e(function () {
        "homepage" == e("body").data("page") && h.initialize()
    })
}(jQuery, window, null, Impress);