(function() {var implementors = {};
implementors["actix_http"] = [{"text":"impl&lt;S&gt; Stream for <a class=\"struct\" href=\"actix_http/encoding/struct.Decoder.html\" title=\"struct actix_http::encoding::Decoder\">Decoder</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Bytes, <a class=\"enum\" href=\"actix_http/error/enum.PayloadError.html\" title=\"enum actix_http::error::PayloadError\">PayloadError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix_http::encoding::decoder::Decoder"]},{"text":"impl&lt;S&gt; Stream for <a class=\"enum\" href=\"actix_http/enum.Payload.html\" title=\"enum actix_http::Payload\">Payload</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Bytes, <a class=\"enum\" href=\"actix_http/error/enum.PayloadError.html\" title=\"enum actix_http::error::PayloadError\">PayloadError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix_http::payload::Payload"]},{"text":"impl Stream for <a class=\"struct\" href=\"actix_http/h1/struct.Payload.html\" title=\"struct actix_http::h1::Payload\">Payload</a>","synthetic":false,"types":["actix_http::h1::payload::Payload"]},{"text":"impl Stream for <a class=\"struct\" href=\"actix_http/h2/struct.Payload.html\" title=\"struct actix_http::h2::Payload\">Payload</a>","synthetic":false,"types":["actix_http::h2::Payload"]}];
implementors["actix_multipart"] = [{"text":"impl Stream for <a class=\"struct\" href=\"actix_multipart/struct.Multipart.html\" title=\"struct actix_multipart::Multipart\">Multipart</a>","synthetic":false,"types":["actix_multipart::server::Multipart"]},{"text":"impl Stream for <a class=\"struct\" href=\"actix_multipart/struct.Field.html\" title=\"struct actix_multipart::Field\">Field</a>","synthetic":false,"types":["actix_multipart::server::Field"]}];
implementors["actix_web"] = [{"text":"impl Stream for <a class=\"struct\" href=\"actix_web/web/struct.Payload.html\" title=\"struct actix_web::web::Payload\">Payload</a>","synthetic":false,"types":["actix_web::types::payload::Payload"]},{"text":"impl&lt;T&gt; Stream for <a class=\"struct\" href=\"actix_web/dev/struct.Readlines.html\" title=\"struct actix_web::dev::Readlines\">Readlines</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web/trait.HttpMessage.html\" title=\"trait actix_web::HttpMessage\">HttpMessage</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"actix_web/trait.HttpMessage.html#associatedtype.Stream\" title=\"type actix_web::HttpMessage::Stream\">Stream</a>: Stream&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"actix_web/web/struct.Bytes.html\" title=\"struct actix_web::web::Bytes\">Bytes</a>, <a class=\"enum\" href=\"actix_web/error/enum.PayloadError.html\" title=\"enum actix_web::error::PayloadError\">PayloadError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix_web::types::readlines::Readlines"]}];
implementors["awc"] = [{"text":"impl&lt;S&gt; Stream for <a class=\"struct\" href=\"awc/struct.ClientResponse.html\" title=\"struct awc::ClientResponse\">ClientResponse</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Stream&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Bytes, <a class=\"enum\" href=\"awc/error/enum.PayloadError.html\" title=\"enum awc::error::PayloadError\">PayloadError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["awc::response::ClientResponse"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()