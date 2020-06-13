import React from "react";


function NoMatch() {
  return (
    <div className="container text-center p-3">
      <div className= "Row">
        <div className="col-md-12">
          < div className="Jumbotron">
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;