import styles from '../styles/Transparency.module.css';
import MainBtn from '../components/MainBtn';
import Image from 'next/image';
import transaction from '../../../public/images/transaction.png'

const Transparency: React.FC = () => {


    return (
        <div id='transparency' className={styles.transparencyContanier}>
            <div className={styles.transparencyBlock}>
            <div className={styles.transparencyText}>
    <span className={styles.transparencyUpperText}>Seamless access, anytime, anywhere    </span>

    <h5>Cash out right away without cost</h5>

    <p>
    Whether you&apos;re on the go or at home, our user-friendly web and mobile app allow you to manage your digital assets with ease. Enjoy secure, real-time transactions and personalized insights at your fingertips.
        <br/><br/>
        Say goodbye to lengthy processing times and hidden fees. Our platform empowers you to cash out your digital assets quickly and effortlessly, whenever you need
    </p>

    <MainBtn text={'Learn more'}/>
</div>

                <div className={styles.transparencyMedia}>
        <Image src={transaction} alt='icon-transaction' />
                </div>
            </div>


        </div>
    );
};

export default Transparency;
