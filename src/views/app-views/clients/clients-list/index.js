import React, { Component } from "react";
import { Card, Table, Tooltip, message, Button } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import UserView from "./UserView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import Loading from "../../../../components/shared-components/Loading";
import EditProfile from "../../setting/EditProfile";

export class ClientsList extends Component {
  state = {
    users: [],
    userProfileVisible: false,
    userSettingsVisible: false,
    selectedUser: null,
    isFetching: false,
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    try {
      this.setState({ ...this.state, isFetching: true });
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((result) => {
          this.setState({ users: result, isFetching: false });
        });
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }
  }

  deleteUser = (event, userId) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      users: this.state.users.filter((item) => item.id !== userId),
    });
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  showUserProfile = (event, userInfo) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo,
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null,
    });
  };

  showUserSettings = (userInfo) => {
    this.setState({
      userSettingsVisible: true,
      selectedUser: userInfo,
    });
  };

  closeUserSettings = () => {
    this.setState({
      userSettingsVisible: false,
      selectedUser: null,
    });
  };

  render() {
    const { users, userProfileVisible, selectedUser, isFetching } = this.state;

    const tableColumns = [
      {
        title: "User",
        dataIndex: "name",
        render: (_, elem) => (
          <div className="d-flex" onClick={() => this.showUserSettings(elem)}>
            <AvatarStatus name={elem.name} subTitle={elem.username} />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Company",
        dataIndex: "company",
        render: (_, elem) => (
          <div className="d-flex" onClick={() => this.showUserSettings(elem)}>
            <span>{elem?.company?.name} </span>
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.company?.name.toLowerCase();
            b = b.company?.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "City",
        dataIndex: "address",
        render: (_, elem) => (
          <div className="d-flex" onClick={() => this.showUserSettings(elem)}>
            <span>{elem?.address?.city} </span>
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.address?.city.toLowerCase();
            b = b.address?.city.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Email",
        dataIndex: "email",
        render: (_, elem) => (
          <div className="d-flex" onClick={() => this.showUserSettings(elem)}>
            <span>{elem?.email} </span>
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.email.toLowerCase();
            b = b.email.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "",
        dataIndex: "actions",
        render: (_, elem) => (
          <div
            className="text-right"
            onClick={() => this.showUserSettings(elem)}
          >
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={(event) => {
                  this.showUserProfile(event, elem);
                }}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={(event) => {
                  this.deleteUser(event, elem.id);
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];

    if (this.state.userSettingsVisible) {
      return <EditProfile {...selectedUser} close={this.closeUserSettings} />;
    }
    return isFetching ? (
      <Loading />
    ) : (
      <Card bodyStyle={{ padding: "0px" }}>
        <Table columns={tableColumns} dataSource={users} rowKey="id" />
        <UserView
          data={selectedUser}
          visible={userProfileVisible}
          close={() => {
            this.closeUserProfile();
          }}
        />
      </Card>
    );
  }
}

export default ClientsList;
