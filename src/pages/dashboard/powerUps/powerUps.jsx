import React from 'react';
import styles from './powerUps.module.css';

const PowerUps = () => {
    const userCoins = 1800;
    const inventory = [
        { id: "shield", name: "Shield", icon: "🛡️", quantity: 1 },
        { id: "streak_freeze", name: "Streak Freeze", icon: "❄️", quantity: 2 },
        { id: "timer_boost", name: "Timer Boost", icon: "⏱️", quantity: 3 },
        { id: "xp_boost", name: "XP Boost", icon: "⚡", quantity: 1 },
        { id: "heart", name: "Heart", icon: "❤️", quantity: 5 }
    ];

    const powerUpsStore = [
        {
            id: "streak_freeze",
            name: "Streak Freeze",
            icon: "❄️",
            prices: [
                { label: "1-day", price: 200 },
                { label: "2-day", price: 400 },
                { label: "3-day", price: 600 }
            ]
        },
        {
            id: "shield",
            name: "Shield",
            icon: "🛡️",
            prices: [
                { label: "1 Piece", price: 150 },
                { label: "2 Pieces", price: 300 },
                { label: "3 Pieces", price: 450 }
            ]
        },
        {
            id: "timer_boost",
            name: "Timer Boost",
            icon: "⏱️",
            prices: [
                { label: "Single", price: 100 },
                { label: "5 Pack", price: 450 },
                { label: "10 Pack", price: 950 }
            ]
        },
        {
            id: "xp_boost",
            name: "XP Boost",
            icon: "⚡",
            prices: [
                { label: "Single", price: 300 },
                { label: "3 Pack", price: 800 },
                { label: "5 Pack", price: 1200 }
            ]
        },
        {
            id: "hint_boost",
            name: "Hint Boost",
            icon: "💡",
            prices: [
                { label: "Single", price: 200 },
                { label: "5 Pack", price: 400 }
            ]
        },
        {
            id: "heart",
            name: "Heart",
            icon: "❤️",
            prices: [
                { label: "Single", price: 50 },
                { label: "5 Pack", price: 200 },
                { label: "10 Pack", price: 350 }
            ]
        },
        {
            id: "turbo_mode",
            name: "Turbo Mode",
            icon: "🚀",
            prices: [
                { label: "Single", price: 400 },
                { label: "3 Pack", price: 1000 }
            ]
        }
    ];

    const handlePurchase = (powerUpId, option) => {
        console.log(`Purchasing ${powerUpId} - ${option.label} for ${option.price} coins`);
    };

    return (
        <div className={styles.powerUpsPage}>
            <div className={styles.header}>
                <h1>Power-Ups</h1>
                <div className={styles.coinBalance}>
                    <span className={styles.coinIcon}>🪙</span>
                    <span>{userCoins}</span>
                </div>
            </div>

            <div className={styles.myItems}>
                <h2>My Items</h2>
                <div className={styles.powerUpGrid}>
                    {inventory.map((item) => (
                        <div key={item.id} className={styles.powerUpCard}>
                            <div className={styles.powerUpIcon}>{item.icon}</div>
                            <div className={styles.powerUpInfo}>
                                <h3>{item.name}</h3>
                                <div className={styles.quantity}>x {item.quantity}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {powerUpsStore.map((powerUp) => (
                <div key={powerUp.id} className={styles.shop}>
                    <div className={styles.shopSection}>
                        <h3>{powerUp.name}</h3>
                        <div className={styles.purchaseOptions}>
                            {powerUp.prices.map((option, index) => (
                                <div key={index} className={styles.purchaseOption}>
                                    <div className={styles.optionLeft}>
                                        <span className={styles.optionIcon}>{powerUp.icon}</span>
                                        <span className={styles.optionLabel}>{option.label}</span>
                                    </div>
                                    <div className={styles.optionRight}>
                                        <span className={styles.price}>{option.price}</span>
                                        <button
                                            className={styles.buyButton}
                                            onClick={() => handlePurchase(powerUp.id, option)}
                                            disabled={userCoins < option.price}
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PowerUps;