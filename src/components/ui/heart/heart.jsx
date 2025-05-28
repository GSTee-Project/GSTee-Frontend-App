import heartIcon from '../../../assets/images/heart.svg'

const Heart = ({value = 0}) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#EA4335', fontFamily: 'Nunito', fontWeight: '700', fontSize: '18px' }}>
            <img src={heartIcon} width={20} alt="" />
            {value}
        </div>
    )
}

export default Heart