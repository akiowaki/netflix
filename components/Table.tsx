import { Product } from "@stripe/firestore-stripe-payments";
import { CheckIcon } from '@heroicons/react/outline'
interface Props {
    products: Product[]
    selectedPlan: Product | null
}
function Table({products,selectedPlan}: Props) {
    return (
        <table>
            <tbody className="divide-y divide-[gray]">
            <tr className="tableRow">
                <td className="tableDataTitle">月額料金</td>
                    {products.map((product)=>(
                         <td
                         className={`tableDataFeature ${
                           selectedPlan?.id === product.id
                             ? 'text-[#E50914]'
                             : 'text-[gray]'
                         }`}
                         key={product.id}
                       >
                            ￥{product.prices[0].unit_amount!.toLocaleString()}
                        </td>
                    ))}
                </tr>
                <tr className="tableRow">
          <td className="tableDataTitle">画質</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.videoQuality}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">解像度</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
          TV,PC,スマホ,タブレットで観る
          </td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.portability === 'true' && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
            </tbody>
        </table>
    );
}

export default Table;