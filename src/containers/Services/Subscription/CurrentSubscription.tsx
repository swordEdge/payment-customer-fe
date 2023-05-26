import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ServiceViews } from 'components';

import { AppActions, RootState } from 'new_redux/store';
import { PATH } from 'consts';

export const SubscriptionContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { subscriptions, subscription } = useSelector(
        (state: RootState) => state.subscription
    );

    const handleUpdateSubscription = (subscriptionId: number) => {
        dispatch(AppActions.subscription.selectSubscriptionRequest({
            subscriptionId, next: () => {
                navigate(PATH.SERVICES_INDEX + '/' + PATH.SERVICES_SUBSCRIPTION);
            }
        }));
    };

    useEffect(() => {
        dispatch(AppActions.subscription.getSubscriptionRequest({}));
        dispatch(AppActions.subscription.getSubscriptionsRequest({}));
    }, []);

    return (
        <ServiceViews.ServiceSubscriptionView
            subscription={subscription!}
            subscriptions={subscriptions}
            updateSubscription={handleUpdateSubscription}
        />
    );
};
