;( function () {


    var Forms = React.createClass({

        render: function () {

            var clickEvent = this.props.clk;

            //var self = this;


            console.log(this.props.sections);
            var sections = [].map.call(this.props.sections, function (judge, i) {

                var questionName = "question" + i;
                var selectAName = "selectA" + i;
                var selectBName = "selectB" + i;

                var questionNameB = "question" + i + 'B';
                var selectANameB = "selectA" + i + 'B';
                var selectBNameB = "selectB" + i + 'B';


                var sections = [];

                if ( judge > 0 && i > 0) {
                    return(
                        <div>
                            <label>質問事項{i + 1}<br />
                                <input type="text" name={questionName} /></label><br />
                            <label>選択肢：A<br />
                                <input type="text" name={selectAName} /></label><br />
                            <label>選択肢：B<br />
                                <input type="text" name={selectBName} /></label><br />
                            <div>
                                <button type="button" onClick={clickEvent(i)}>分岐を追加</button>
                            </div>
                        </div>
                    );
                } else if ( i === 0 ) {
                    return(
                        <div>
                            <label>質問事項{i + 1}<br />
                                <input type="text" name={questionName} /></label><br />
                            <label>選択肢：A<br />
                                <input type="text" name={selectAName} /></label><br />
                            <label>選択肢：B<br />
                                <input type="text" name={selectBName} /></label><br />
                        </div>
                    );
                } else {
                    return(
                        <div>
                            <div>
                                <label>質問事項{i + 1}A<br />
                                    <input type="text" name={questionName} /></label><br />
                                <label>選択肢：A<br />
                                    <input type="text" name={selectAName} /></label><br />
                                <label>選択肢：B<br />
                                    <input type="text" name={selectBName} /></label><br />
                            </div>
                            <div>
                                <label>質問事項{i + 1}B<br />
                                    <input type="text" name={questionNameB} /></label><br />
                                <label>選択肢：A<br />
                                    <input type="text" name={selectANameB} /></label><br />
                                <label>選択肢：B<br />
                                    <input type="text" name={selectBNameB} /></label><br />
                            </div>
                            <div>
                                <button type="button" onClick={clickEvent(i)}>分岐を削除</button>
                            </div>

                        </div>
                    );
                }


            });

            return (
                <div>
                    {sections}
                </div>
            );
        }
    });

    var FormGroup = React.createClass({
        getInitialState: function () {
            return {
                sections: [],
                count: 1
            };
        },
        componentWillMount: function () {
            this.setState({
                sections: [0],
                count: 1
            });
        },
        onSubmit: function (e) {
            e.preventDefault();
        },
        onClickBtn: function () {


            if( this.state.count >= 5 ) {
                return;
            }

            var num =  this.state.count + 1;
            this.setState({
                count: num,
                sections: this.state.sections.concat([num])
            });


        },
        onEventOther: function (i) {

            var self = this;
            var newSections = self.state.sections;




            //newSections = [].slice.call(newSections);

            //if ( sections[i] === '-1' ) {
            //    newSections[i] = '1';
            //
            //} else {
            //    newSections[i] = '-1';
            //}






            return function () {

                if ( newSections[i] > 0 ) {
                    newSections[i] = -1;
                } else {
                    newSections[i] = 1;
                }
                self.setState({
                    sections: newSections
                });
                console.log(newSections);

                //if ( sections[i] ) {
                //    self.setState({
                //        sections: newSections[i] = -1
                //    });
                //} else {
                //    self.setState({
                //        sections: newSections[i] = -1
                //    });
                //}

            };



        },
        render: function () {
            return (
                <form onSubmit={this.onSubmit}>
                    <label for="title" className="titleLabel">タイトル</label>
                    <input type="text" id="title" className="titleField" name="title"/>
                    <Forms formIndex={this.state.count} sections={this.state.sections} clk={this.onEventOther} />
                    <button type="button" className="add-question" onClick={this.onClickBtn}>追加</button><br />
                </form>
            );
        }
    });


    var view = document.getElementById('view');

    ReactDOM.render(
        <FormGroup />,
        view
    );

})();