import React from 'react';

export const MyRewardActivities = () => {

    return (
        <span>
              <div className="h5-stats-title">
                  My Reward Activities
              </div>
              <div className="h5-stats-content">
                <div className="pull-left" style={{height: '170px', position: 'relative'}}>
                  <div className="h5-mystats">20 <em>Given</em></div>
                  <div className="h5-mystats">80 <em>Remaining</em></div>
                  <div className="clearfix"></div>
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#recognitionForm"
                          style={{position: 'absolute', bottom: '10px'}}>Recognize a Peer
                  </button>
                </div>

                <div className="pull-left"
                     style={{margin: '0 20px', width: '100px', position: 'relative', height: '170px'}}>
                  You were recognized for
                  <span className="h5-recognized-value">Teamwork</span> by
                    <a href="#" className="h5-recognized-by">Julie Doe</a>
                  <span className="h5-recognized-date">8/16/2016</span>
                  <span className="h5-recognized-pts">20 pts</span>
                  <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myRecognition"
                          style={{position: 'absolute', left: 0, bottom: '10px'}}>
                    <span className="glyphicon glyphicon-asterisk"></span> View
                  </button>
                </div>

                <div className="pull-left" style={{position: 'relative', height: '170px'}}>
                  <div className="h5-mystats earned">150 <em>Earned</em></div>
                  <button type="button" className="btn btn-success"
                          style={{position: 'absolute', left: 0, bottom: '10px'}}>
                    <span className="glyphicon glyphicon-shopping-cart"></span> Store
                  </button>
                </div>
              </div>
          </span>
    );
};
