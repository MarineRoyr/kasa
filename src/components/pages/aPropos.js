import React from 'react';
import '../../assets/styles/App.scss';
import AproposData from '../../datas/aPropos.json';
import Collapse from '../design-components/sectionDesign'
import BannerApropos from '../design-components/bannerApropos';

const APropos = () => {
    return (
        <main>
          <BannerApropos/>
            {AproposData.map((itemApropos) => (
                <div key={itemApropos.id} className="AproposItem">
                    <div className="SectionTitle">
                      <Collapse Title={itemApropos.title}>
                        <p>{itemApropos.description}</p>
                        </Collapse>
                    </div>
                </div>
            ))}
        </main>
    );
};

export default APropos;