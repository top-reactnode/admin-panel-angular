import { Component, Input } from '@angular/core';

@Component({
  selector: 'logo-svg',
  template: `
    <svg
      [class]="class"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 116 36">
      <path
        d="M.173 3.617l6.57 3.79 6.569-3.79L6.742 0 .172 3.617z"
        fill="#099170" />
      <path
        d="M21.437 7.751l6.396 3.617 6.57-3.617-6.57-3.79-6.396 3.79z"
        fill="#FFDC44" />
      <path
        d="M0 28.249L13.484 36v-7.407L6.396 24.46V8.096L0 4.306V28.25z"
        fill="#099170" />
      <path
        d="M28.179 12.057v7.58l6.396-3.79-.017-7.407-6.38 3.617zM14.176 28.593V36l13.311-7.751v-7.407l-13.311 7.751z"
        fill="#FFDC44" />
      <path
        d="M7.088 8.096v15.502l6.396-3.79V4.307l-6.396 3.79z"
        fill="#E21B30" />
      <path
        d="M21.09 15.847l6.397 3.79v-7.58L21.091 8.44v7.407z"
        fill="#FFDC44" />
      <path
        d="M7.347 24.201l6.483 3.703 13.312-7.665-6.397-3.875L7.347 24.2z"
        fill="#E21B30" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M46.924 3.962v14.425h5.322v2.477h-8.163V3.962h2.841zm15.246 7.177V9.632h2.661V20.9h-2.66v-1.508c-.36.574-.864 1.005-1.547 1.328a4.471 4.471 0 0 1-2.013.466c-.863 0-1.654-.143-2.374-.466-.719-.287-1.33-.754-1.87-1.292-.503-.538-.934-1.184-1.186-1.902a6.157 6.157 0 0 1-.432-2.26c0-.79.144-1.544.432-2.261a6.076 6.076 0 0 1 1.187-1.902c.539-.538 1.15-1.005 1.87-1.292.718-.323 1.51-.467 2.373-.467.683 0 1.33.144 2.013.467.683.323 1.187.754 1.546 1.328zm-.215 5.49c.18-.43.251-.897.251-1.364a3.53 3.53 0 0 0-.251-1.363c-.144-.43-.396-.79-.683-1.148-.288-.323-.648-.575-1.08-.79a3.491 3.491 0 0 0-1.402-.287c-.503 0-.97.108-1.366.287-.396.18-.755.467-1.043.79-.288.322-.54.717-.683 1.148-.144.43-.252.897-.252 1.364 0 .466.072.932.216 1.363.144.43.395.825.683 1.148.288.323.648.575 1.043.79.395.18.863.287 1.366.287.504 0 .971-.108 1.403-.287.395-.18.755-.43 1.079-.79.323-.323.539-.717.719-1.148zm5.034 4.27V9.633h7.263v2.583H69.65V20.9h-2.661zm16.972-9.76V9.632h2.661V20.9h-2.66v-1.508c-.36.574-.864 1.005-1.547 1.328a4.472 4.472 0 0 1-2.014.466c-.863 0-1.654-.143-2.373-.466-.72-.287-1.33-.754-1.87-1.292-.503-.538-.935-1.184-1.186-1.902a6.157 6.157 0 0 1-.432-2.26c0-.79.144-1.544.432-2.261a6.077 6.077 0 0 1 1.186-1.902c.54-.538 1.15-1.005 1.87-1.292.72-.323 1.51-.467 2.373-.467.684 0 1.33.144 2.014.467.647.323 1.187.754 1.546 1.328zm-.252 5.49c.18-.43.252-.897.252-1.364a3.53 3.53 0 0 0-.252-1.363c-.143-.43-.395-.79-.683-1.148-.287-.323-.647-.575-1.078-.79a3.491 3.491 0 0 0-1.403-.287c-.503 0-.97.108-1.366.287a3.21 3.21 0 0 0-1.043.79c-.288.322-.54.717-.683 1.148-.144.43-.252.897-.216 1.364 0 .466.072.932.216 1.363.144.43.395.825.683 1.148.288.323.647.575 1.043.79.395.18.863.287 1.366.287.504 0 .971-.108 1.403-.287a3.363 3.363 0 0 0 1.762-1.938zm13.665-6.997h2.696L95.684 20.9h-3.38L87.916 9.631h2.696l3.38 8.648 3.38-8.648zm8.558-.288c3.631 0 6.149 3.194 5.681 6.89h-8.918c0 .97 1.007 2.835 3.38 2.835 2.05 0 3.417-1.758 3.417-1.758l1.797 1.364c-1.618 1.686-2.948 2.476-4.998 2.476-3.703 0-6.221-2.297-6.221-5.921-.035-3.23 2.554-5.886 5.862-5.886zm-3.237 4.953h6.401c-.036-.216-.36-2.835-3.236-2.835-2.841-.036-3.129 2.583-3.165 2.835zm10.644 6.602V3.962H116V20.9h-2.661z" />
      <path
        d="M58.073 29.78c-.433-.255-.793-.582-1.01-1.019-.252-.436-.36-.945-.36-1.527 0-.583.108-1.092.36-1.528a2.724 2.724 0 0 1 1.01-1.019c.432-.254.937-.364 1.55-.364.36 0 .72.073 1.08.182.361.11.613.255.83.437l-.469 1.055c-.468-.328-.937-.51-1.441-.51-.469 0-.793.146-1.046.437-.252.291-.36.727-.36 1.273 0 .582.108 1.019.36 1.31.253.29.613.436 1.046.436.504 0 .973-.182 1.441-.51l.468 1.056a2.563 2.563 0 0 1-.828.436c-.36.11-.721.182-1.081.182-.613.037-1.118-.073-1.55-.327zm8.505.29l-.505-1.163h-2.522l-.505 1.164h-1.514l2.667-5.675h1.19l2.666 5.675h-1.477zm-2.523-2.29h1.55l-.757-1.783-.793 1.782zm8.902-3.384h1.153v5.675h-1.298v-2.583l-1.08 2.583h-.938l-1.08-2.583v2.583h-1.298v-5.675h1.19l1.693 3.892 1.658-3.892zm2.234 5.675v-5.675h4.036v1.164h-2.595v1.055h2.415v1.164h-2.415v1.164h2.595v1.164h-4.036v-.036zm9.73 0h-1.585l-.721-1.892c-.072-.218-.288-.327-.613-.327h-.54v2.219h-1.478v-5.675h2.63c.685 0 1.19.146 1.55.437.36.29.505.727.505 1.273 0 .4-.108.727-.324.982-.217.291-.505.473-.865.582.144.036.288.11.432.218.144.11.216.291.288.473l.721 1.71zm-1.838-3.456c.144-.109.216-.255.216-.473 0-.218-.072-.363-.216-.473-.144-.109-.36-.145-.684-.145h-.937v1.237h.937c.324 0 .54-.073.684-.146zm3.748 3.165c-.432-.218-.757-.582-1.009-1.019a3.45 3.45 0 0 1-.36-1.564c0-.582.108-1.091.36-1.528.216-.436.577-.764 1.01-1.018.432-.255.936-.364 1.513-.364.576 0 1.081.11 1.513.364.433.218.757.582.974 1.018.216.437.36.946.36 1.528 0 .582-.108 1.091-.36 1.564-.217.437-.541.764-.974 1.019-.432.254-.937.364-1.513.364-.577 0-1.081-.11-1.514-.364zm2.523-1.237c.252-.291.36-.727.36-1.31 0-.582-.108-1.018-.36-1.309-.252-.291-.577-.436-1.01-.436-.432 0-.756.145-1.008.436-.252.291-.36.727-.36 1.31 0 .581.108 1.018.36 1.309.252.291.576.437 1.009.437.432.036.757-.146 1.009-.437zm3.892 1.237c-.432-.218-.757-.582-1.009-1.019a3.449 3.449 0 0 1-.36-1.564c0-.582.108-1.091.36-1.528.216-.436.577-.764 1.009-1.018a3.325 3.325 0 0 1 1.514-.364c.576 0 1.08.11 1.513.364.433.255.757.582.973 1.018a3.4 3.4 0 0 1 .36 1.528c0 .582-.107 1.091-.36 1.564-.216.437-.54.764-.973 1.019-.432.254-.937.364-1.513.364-.577 0-1.082-.11-1.514-.364zm2.523-1.237c.252-.291.36-.727.36-1.31 0-.582-.108-1.018-.36-1.309-.253-.291-.577-.436-1.01-.436-.432 0-.756.145-1.008.436-.253.291-.36.727-.36 1.31 0 .581.107 1.018.36 1.309.252.291.576.437 1.009.437.432.036.756-.146 1.009-.437zm6.378-4.147h1.406v5.675h-1.117l-2.559-3.238v3.238h-1.405v-5.675h1.08l2.559 3.201v-3.2h.036z" />
    </svg>
  `,
})
export class LogoComponent {
  @Input() class!: string;
}