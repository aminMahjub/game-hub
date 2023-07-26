const MetaCritic = ({ metacriticCount }: { metacriticCount: number }) => {
    const metacriticStatusStyle = metacriticCount <= 50 ? 'badge-error text-error-content' : 'badge-success text-success-content';

    return <div className={`badge font-bold ml-2 ${metacriticStatusStyle}`}>{metacriticCount || 'Not'}</div>
};

export default MetaCritic;
