import styles from '../styles/Trade.module.css';
import MainBtn from '../components/MainBtn';
import Bitcoin from '../components/Bitcoins';

const Trade: React.FC = () => {


    return (
        <div id='trade' className={styles.tradeContanier}>
            <div className={styles.tradeBlock}>


                <div className={styles.tradeMedia}>
<Bitcoin/>
                </div>
                <div className={styles.tradeText}>
    <span className={styles.tradeUpperText}>Trading at your fingertips</span>

    <h5>Trading has never been this easy!</h5>

    <p>
        Join our platform through the web or mobile app and access the best digital wallet available today. 
        Make secure, seamless transactions with real-time tracking and personalized insights.
        <br/><br/>
        Powered by our AI, get precise market analysis on demand, so you can confidently make informed trading decisions and stay ahead of market fluctuations.
    </p>

    <MainBtn text={'Learn more'}/>
</div>
            </div>


        </div>
    );
};

export default Trade;
