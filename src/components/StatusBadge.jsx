export default function StatusBadge({status, Icon, className}) {
    return <>
        <div className={className}>
            <Icon />
            {status}
        </div>
    </>
}