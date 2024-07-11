import React from 'react';
import '../../assets/styles/App.scss';
import AproposData from '../../datas/aPropos.json';
import Collapse from '../design-components/sectionDesign'
import Banner from '../design-components/banner';
import BannerApropos from '../design-components/images/bannerApropos.png'

const APropos = () => {
    return (
        <div>
          <Banner image={BannerApropos} alt="Forêt de sapin et montagne"/>
            {AproposData.map((itemApropos) => (
                <div key={itemApropos.id} className="AproposItem">
                    <div className="SectionTitle">
                      <Collapse Title={itemApropos.title}>
                        <p>{itemApropos.description}</p>
                        </Collapse>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default APropos;