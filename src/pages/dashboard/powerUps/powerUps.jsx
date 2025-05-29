import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchPowerUpsData,
    purchasePowerUp
} from '../../../store/powerUpsSlice.js';
import './PowerUps.module.css';

const PowerUps = ({ userId }) => {
    const dispatch = useDispatch();
    const { data: powerUpsData, loading, purchasingId } = useSelector((state) => state.powerUps);

    useEffect(() => {
        if (userId) {
            dispatch(fetchPowerUpsData(userId));
        }
    }, [dispatch, userId]);

    const handlePurchase = (powerUpId, quantity, price) => {
        dispatch(purchasePowerUp({ userId, powerUpId, quantity, price }));
    };

    const getInventoryQuantity = (powerUpId) => {
        const item = powerUpsData?.inventory.find((item) => item.id === powerUpId);
        return item ? item.quantity : 0;
    };

    const PowerUpCard = ({ powerUp, isInventory = false }) => {
        const quantity = isInventory ? powerUp.quantity : getInventoryQuantity(powerUp.id);

        return (
            <div className="powerup-card">
                <div className="powerup-icon">{powerUp.icon}</div>
                <div className="powerup-info">
                    <h4>{powerUp.name}</h4>
                    {isInventory && <span className="quantity">x {quantity}</span>}
                </div>
            </div>
        );
    };

    const PurchaseSection = ({ powerUp }) => (
        <div className="purchase-section">
            <h3>{powerUp.name}</h3>
            <div className="purchase-options">
                {powerUp.prices.map((option, index) => (
                    <div key={index} className="purchase-option">
                        <div className="option-info">
                            <span className="powerup-icon">{powerUp.icon}</span>
                            <span className="quantity-text">
                {option.quantity === 1 ? 'Single' : `${option.quantity} Pack`}
              </span>
                        </div>
                        <div className="price-section">
                            <span className="coin-icon">🪙</span>
                            <span className="price">{option.price}</span>
                        </div>
                        <button
                            className="buy-button"
                            onClick={() => handlePurchase(powerUp.id, option.quantity, option.price)}
                            disabled={
                                purchasingId === `${powerUp.id}-${option.quantity}` ||
                                powerUpsData.userCoins < option.price
                            }
                        >
                            {purchasingId === `${powerUp.id}-${option.quantity}` ? 'Buying...' : 'Buy Now'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    if (loading) {
        return (
            <div className="powerups-page">
                <div className="loading-spinner">Loading Power-Ups...</div>
            </div>
        );
    }

    if (!powerUpsData) {
        return (
            <div className="powerups-page">
                <div className="error-message">Failed to load power-ups data</div>
            </div>
        );
    }

    return (
        <div className="powerups-page">
            <div className="page-header">
                <h1>Power-Ups</h1>
                <div className="coin-balance">
                    <span className="coin-icon">🪙</span>
                    <span className="balance">{powerUpsData.userCoins}</span>
                </div>
            </div>

            <section className="inventory-section">
                <h2>My Items</h2>
                <div className="powerups-grid">
                    {powerUpsData.inventory.map((item) => (
                        <PowerUpCard key={item.id} powerUp={item} isInventory={true} />
                    ))}
                    {powerUpsData.inventory.length === 0 && (
                        <div className="empty-inventory">No power-ups in your inventory yet!</div>
                    )}
                </div>
            </section>

            {powerUpsData.store?.length > 0 ? (
                powerUpsData.store.map((powerUp) => (
                    <PurchaseSection key={powerUp.id} powerUp={powerUp} />
                ))
            ) : (
                <div className="empty-store">No power-ups available for purchase.</div>
            )}
        </div>
    );
};

export default PowerUps;
