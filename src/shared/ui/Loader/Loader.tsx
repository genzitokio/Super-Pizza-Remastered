import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = () => (
    <div className="loader-wrapper">

        <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
        </div>

    </div>
);
