import coinIcon from '../../../assets/images/G-coin.svg'

const GCoin = ({ value = 0 }) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', gap: '15px', color: '#0866FF', fontFamily: 'Nunito', fontWeight: '700', fontSize: '18px'}}>
            <img src={coinIcon} width={20} alt="" />
            {value}
        </div>
    )
}

export default GCoin