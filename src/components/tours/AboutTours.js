import {Image, Tabs} from "antd";





const AboutTours = (props) => {

    const { TabPane } = Tabs;

    const value = props.value

    return (
        <Tabs defaultActiveKey="0" className='tour-day-tabs'>
            <TabPane tab="Общее" key="0">
                {value.tourDesc}
            </TabPane>
            {Object.values(value.programDesc).map(value=><TabPane tab={'День '+value.id} key={value.id}>
                <div className='day-tab-desc'>
                <div>
                    {value.desc}
                </div>
                <div>
                    <Image className='tab-image'
                        src={value.img}/>
                </div>
                </div>
            </TabPane>)}
        </Tabs>
    );
};
export default AboutTours