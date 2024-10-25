import styles from '../styles/UseCrypto.module.css';
import MainBtn from '../components/MainBtn';
import Cryptos from '../components/Cryptos';

const UseCrypto: React.FC = () => {


    return (
        <div id='invest' className={styles.useCryptoContanier}>
            <div className={styles.useCryptoBlock}>

                <div className={styles.useCryptoText}>
    <span className={styles.useCryptoUpperText}>receive cashback in btc    </span>

    <h5>Invest with dollars, euros or cryptos    </h5>

    <p> Join our platform through the web or mobile app and access the best tools to manage your money in real time. Acquire currencies, stocks, and cryptocurrencies with market data updated minute by minute, all quickly and securely.         <br/><br/>

     Powered by our AI, receive detailed and personalized market analysis, so you can make informed decisions and stay on top of market fluctuations. Manage your investments with confidence and always stay one step ahead. </p>







    <MainBtn text={'Learn more'}/>
</div>
<div className={styles.useCryptoMedia}>
<Cryptos/>
                </div>
            </div>


        </div>
    );
};

export default UseCrypto;
