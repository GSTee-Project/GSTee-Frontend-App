import streakIcon from '../../../assets/images/streak.svg'

const Streak = ({value = 0}) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#D47129', fontFamily: 'Nunito', fontWeight: '700', fontSize: '18px' }}>
            <img src={streakIcon} width={20} alt="" />
            {value}
        </div>
    )
}

export default Streak