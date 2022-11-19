import { useState } from 'react';
import { OrderType } from '../../types/order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface Props {
  icon: string;
  title: string;
  orders: OrderType[];
}

export function OrdersBoard(props: Props) {
  const { icon, title, orders } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);

  function handleOpenOrder(order: OrderType) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenOrder(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
      <OrderModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        order={selectedOrder}
      />
    </Board>
  );
}
