import './sectionheader.component.scss';

const SectionHeaderComponent = ({sectionName}) => {
    return(
        <div className="parent">
            <div className="background">
            </div>
            <p className="sectionName">{sectionName}</p>
        </div>
            
        
    );
}
export default SectionHeaderComponent;