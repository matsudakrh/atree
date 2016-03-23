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
            var sections = this.props.sections.map( function (obj, i) {

                var questionName = "question" + i;
                var selectAName = "selectA" + i;
                var selectBName = "selectB" + i;

                return(
                    <div>
                        <label>質問事項{obj}<br />
                            <input type="text" name={questionName} /></label><br />
                        <label>選択肢：A<br />
                            <input type="text" name={selectAName} /></label><br />
                        <label>選択肢：B<br />
                            <input type="text" name={selectBName} /></label><br />
                    </div>
                );
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
                sections: [1],
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
        },
        render: function () {
            return (
                <form onSubmit={this.onSubmit}>
                    <label for="title" className="titleLabel">タイトル</label>
                        <input type="text" id="title" className="titleField" name="title"/>
                    <Forms formIndex={this.state.num} sections={this.state.sections}/>
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