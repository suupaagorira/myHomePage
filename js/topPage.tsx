import React from "react";
import { Container } from "react-bootstrap";

const Top = () => {
    return (
        <Container>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">
                        スーパーゴリラのホームページへようこそ!
                    </h1>
                    <p className="col-md-8 fs-4">
                        ここはトップページです。私について知りたいならこちらをクリックしてください。
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        詳しく見る
                    </button>
                </div>
            </div>
            <h2>工事中</h2>
            <p>
                現時点ではまだ作成中です。ここにその他の内容が増えていきます。
            </p>
        </Container>
    );
};
export default Top;