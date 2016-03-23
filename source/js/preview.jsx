; ( function ($) {
    var drawAtree = function (data) {
        var Dist = React.createClass({
            render: function () {
                var Nodes = this.props.data.map(function (obj, i) {
                    return (
                        <div>
                            <h3>{obj.question}</h3>

                            <div>
                                <h3>{obj.selectA}</h3>

                                <h3>{obj.selectB}</h3>
                            </div>
                        </div>
                    );
                });
                console.log(this.props.data);

                return (
                    <div>
                        {Nodes}
                    </div>
                );
            }
        });

        var Paper = React.createClass({
            getInitialState: function () {
                return {
                    title: "",
                    data: []
                };
            },
            componentWillMount: function () {
                this.setState({
                    title: data.data[0].title,
                    data: data.data[0].question
                });
            },
            render: function () {
                return (
                    <div>
                        <h2>{this.state.title}</h2>
                        <Dist sample="テスト" data={this.state.data}/>
                    </div>
                );
            }
        });
        ReactDOM.render(
            <Paper />,
            document.getElementById('view')
        );
    };

    $.ajax({
            url: '/json/test.json',
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