import Document, { Html, Head, Main, NextScript } from 'next/document';
import Appbar from '../components/appbar';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Appbar />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
