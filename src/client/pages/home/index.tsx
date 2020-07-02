import React, { FC, Fragment } from 'react';
import axios from 'axios';
import Layout from '@components/layout';
import Sidebar from '@components/sidebar';
import Button from '@components/button';

const GetCouponQtyShopMemberCountUpperLimitInfo = async (shopId: number) => {
    const url = `/Api/ShopSetting/GetCouponQtyShopMemberCountUpperLimitInfo/${shopId}`;
    try {
        const res = await axios.get(url);
        return Promise.resolve(res);
    } catch (err) {
        return Promise.reject(err.message);
    }
};

const Home: FC = () => {
    return (
        <Fragment>
            <Sidebar>
                <div>home</div>
            </Sidebar>
            <Layout>
                <Button onClick={() => GetCouponQtyShopMemberCountUpperLimitInfo(11203)}>Fetch</Button>
            </Layout>
        </Fragment>
    );
};

export default Home;
