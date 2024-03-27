import { ProductList } from "../components";
import { Filter } from "lucide-react";
import { Checkbox, Row, Col } from "antd";

const ProductListPage = () => {
  return (
    <div className="container mx-auto mb-10 px-2">
      <div className="flex">
        <div className="w-[300px] hidden lg:block">
          <p className="text-lg  my-4 flex items-center gap-4">
            <Filter size={20} strokeWidth={1.5} /> Bộ lọc
          </p>
          <div>
            <p className="mb-2">Sản phẩm</p>
            <Checkbox.Group>
              <Row gutter={[16, 8]}>
                <Col span={24}>
                  <Checkbox value="A">Lumina (6)</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="B">Other (2)</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="C">Playing Cards (6)</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold my-4">Danh sách sản phẩm</p>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
