;( function () {



    //var Text = React.createClass({
    //    getInitialState: function () {
    //        return { text: "" };
    //    },
    //    onChangeText: function (e) {
    //        this.setState({ text: e.target.value });
    //    },
    //    render: function () {
    //        return (
    //            <div>
    //                <input type="text" value={this.state.text} onChange={this.onChangeText} />
    //                <p>{this.state.text}</p>
    //            </div>
    //        );
    //    }
    //});
    //ReactDOM.render(
    //    <Text />,
    //    document.getElementById('view')
    //);

    var Forms = React.createClass({
        render: function () {


            console.log(this.props.sections);
            var clkEvent = this.props.clk;

            var sections = this.props.sections.map( function (judge, i) {

                var questionName = "question" + i;
                var selectAName = "selectA" + i;
                var selectBName = "selectB" + i;

                var questionNameB = "question" + i + 'B';
                var selectANameB = "selectA" + i + 'B';
                var selectBNameB = "selectB" + i + 'B';


                var sections = [];

                console.log(judge);

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
                                <button type="button" onClick={clkEvent({i})}>分岐を追加</button>
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
                sections: ['a'],
                count: 1
            };
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

            console.log(this.state.sections[num]);


        },
        onClickOther: function (i) {

            if ( this.state.sections[i] ) {
                this.setState({
                    sections: this.state.sections[i] *= -1
                });
            } else {
                this.setState({
                    sections: this.state.sections[i] *= -1
                });
            }


        },
        render: function () {
            return (
                <form onSubmit={this.onSubmit}>
                    <label for="title" className="titleLabel">タイトル</label>
                    <input type="text" id="title" className="titleField" name="title"/>
                    <Forms formIndex={this.state.count} sections={this.state.sections} clk={this.onClickOther} />
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