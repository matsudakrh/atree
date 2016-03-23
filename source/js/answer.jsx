"use strict";
; ( function ($) {
    var drawAtree = function (data) {
        var Dist = React.createClass({
            render: function () {

                var Title = this.props.Title;
                var clkA = this.props.clickEventA;
                var clkB = this.props.clickEventB;


                var sections = [];
                var answer = this.props.preSelect;

                this.props.data.map(function (obj, i) {

                    var radioName = "section" + i;

                    var A_ID = "selectA" + i;
                    var B_ID = "selectB" + i;


                    console.log(answer);


                    if (
                        answer[i - 1] &&
                        answer[i - 1] == "b" &&
                        obj[1]
                    ) {
                        sections.push(
                            <div className="card">
                                <h3 className="subTitle">{obj[1].question}</h3>
                                <div className="inputHolder">
                                    <div className="aArea" onClick={clkA}>
                                        <label htmlFor={A_ID}>
                                            <span>{obj[1].selectA}</span>
                                        </label>
                                    </div>
                                    <div className="bArea" onClick={clkB}>
                                        <label htmlFor={B_ID}>
                                            <span>{obj[1].selectB}</span>
                                        </label>
                                    </div>
                                    <input type="radio" id={A_ID} name={radioName} value={obj[1].selectA}/>
                                    <input type="radio" id={B_ID} name={radioName} value={obj[1].selectB}/>
                                </div>
                            </div>
                        );
                    } else {
                        sections.push(
                            <div className="card">
                                <h3 className="subTitle">{obj[0].question}</h3>
                                <div className="inputHolder">
                                    <div className="aArea" onClick={clkA}>
                                        <label htmlFor={A_ID}>
                                            <span>{obj[0].selectA}</span>
                                        </label>
                                    </div>
                                    <div className="bArea" onClick={clkB}>
                                        <label htmlFor={B_ID}>
                                            <span>{obj[0].selectB}</span>
                                        </label>
                                    </div>
                                    <input type="radio" id={A_ID} name={radioName} value={obj[0].selectA}/>
                                    <input type="radio" id={B_ID} name={radioName} value={obj[0].selectB}/>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div>
                            {sections}
                            </div>
                    );


                });

                sections.reverse();

                return (
                    <div className="answerArea">
                        <h2 className="title">{this.props.Title}</h2>
                        {sections}
                        <div className="completeSection">終了しました</div>
                    </div>
                );
            }
        });

        var Paper = React.createClass({
            getInitialState: function () {
                return {
                    title: "",
                    currentSection: 1,
                    preSelect: [],
                    data: []
                };
            },
            componentWillMount: function () {
                this.setState({
                    title: data.data[0].title,
                    currentSection: 1,
                    preSelect: [],
                    data: data.data[0].question
                });
            },
            clickHandlerA: function (e) {
                var card = document.getElementsByClassName('card');

                card = Array.prototype.slice.call(card);
                card.reverse();
                card = card[this.state.currentSection - 1];

                card.style.display = "none";

                var num = this.state.currentSection + 1;

                this.setState({
                    currentSection: num,
                    preSelect: this.state.preSelect.concat(["a"])
                });

            },
            clickHandlerB: function (e) {
                var card = document.getElementsByClassName('card');

                card = Array.prototype.slice.call(card);
                card.reverse();
                card = card[this.state.currentSection - 1];

                card.style.display = "none";

                var num = this.state.currentSection + 1;

                this.setState({
                    currentSection: num,
                    preSelect: this.state.preSelect.concat(["b"])
                });

            },
            render: function () {
                return (
                    <form className="">
                        <Dist
                            data={this.state.data}
                            Title={this.state.title}
                            preSelect={this.state.preSelect}
                            clickEventA={this.clickHandlerA}
                            clickEventB={this.clickHandlerB}
                            />
                    </form>
                );
            }
        });
        ReactDOM.render(
            <Paper />,
            document.getElementById('view')
        );
    };

    $.ajax({
            url: '/json/base.json',
            dataType: 'json',
            success: function (data) {
                drawAtree(data)
            },
            error: function () {
                console.log('Error!');
            }
        }
    );

})(jQuery);