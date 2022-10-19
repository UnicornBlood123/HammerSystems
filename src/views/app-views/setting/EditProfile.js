import React, { Component } from "react";
import { Form, Button, Input, Row, Col, message } from "antd";
import { ROW_GUTTER } from "constants/ThemeConstant";

export class EditProfile extends Component {
  state = {
    name: this.props.name,
    email: this.props.email,
    username: this.props.username,
    company: this.props.company.name,
    website: this.props.website,
    city: this.props.address.city,
    close: this.props.close,
  };

  render() {
    const onFinish = (values) => {
      const key = "updatable";
      message.loading({ content: "Updating...", key });
      setTimeout(() => {
        this.setState({
          name: values.name,
          email: values.email,
          username: values.username,
          company: values.company,
          website: values.website,
          city: values.city,
        });
        this.state.close();
        message.success({ content: "Done!", key, duration: 2 });
      }, 1000);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const { name, email, username, company, website, city } = this.state;

    return (
      <>
        <div className="mt-4">
          <Button type="primary" onClick={this.state.close}>
            Back
          </Button>
          <Form
            name="basicInformation"
            layout="vertical"
            initialValues={{
              name: name,
              email: email,
              username: username,
              company: company,
              website: website,
              city: city,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row style={{ justifyContent: "center" }}>
              <Col xs={24} sm={24} md={24} lg={16}>
                <Row gutter={ROW_GUTTER}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: "email",
                          message: "Please enter a valid email!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Company" name="company">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Website" name="website">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="City" name="city">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                  Save Change
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </>
    );
  }
}

export default EditProfile;
